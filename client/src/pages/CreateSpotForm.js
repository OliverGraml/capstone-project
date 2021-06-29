import styled from 'styled-components';
import {useState} from 'react';
import validatePersonalSpot from '../lib/validation.js';

export default function CreateSpotForm({onAddSpot}) {
  const initialPersonalSpotState = {
    username: '',
    email: '',
    further_info: '',
    meet_others: true,
    latitude: '',
    longtitude: '',
  };

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [personalSpot, setPersonalSpot] = useState(initialPersonalSpotState);
  const [isError, setIsError] = useState(false);

  function getLocation() {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validatePersonalSpot(personalSpot)) {
      onAddSpot(personalSpot);
      setPersonalSpot(initialPersonalSpotState);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  function updateSpot(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setPersonalSpot({...personalSpot, [fieldName]: fieldValue});
  }
  console.log(personalSpot);

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        {isError && <ErrorBox>You have an error in your form.</ErrorBox>}
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          onChange={updateSpot}
          value={personalSpot.username}
        />

        <label>E-Mail to reach you:</label>
        <input
          type="email"
          name="email"
          onChange={updateSpot}
          value={personalSpot.email}
        />

        <label>Search or offer something:</label>
        <input
          type="text"
          name="further_info"
          onChange={updateSpot}
          value={personalSpot.further_info}
        />

        <section>
          <div>
            <label htmlFor="openToMeet">Open to meet other DNs:</label>
          </div>
          <div>
            <input type="radio" value="true" name="openToMeet" id="yes" />
            <label for="yes">Yes</label>
          </div>
          <div>
            <input type="radio" value="false" name="openToMeet" id="no" />
            <label for="no">No</label>
          </div>
        </section>

        <label>Latitude:</label>
        <input
          type="text"
          name="latitude"
          onChange={updateSpot}
          value={personalSpot.latitude}
        />

        <label>Longtitude:</label>
        <input
          type="text"
          name="longtitude"
          onChange={updateSpot}
          value={personalSpot.longtitude}
        />

        <div>
          <LocationButton onClick={getLocation}>Get Location</LocationButton>
          <p>{status}</p>
        </div>

        <Buttons>
          <Button isPrimary>Add Spot</Button>
          <Button type="reset">Cancel</Button>
        </Buttons>
      </Form>
    </>
  );
}

const Form = styled.form`
  color: var(--primary-orange);
  display: grid;
  gap: 0.5rem;
  width: 80%;
  margin: 1.5rem auto;

  label {
    font-weight: bold;
  }

  section {
    display: flex;
    gap: 3rem;
  }
`;

const Buttons = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1.2rem;
  gap: 0.5rem;
  width: 8rem;
  background: ${(props) =>
    props.isPrimary ? 'var(--primary-orange)' : 'var(--light-orange)'};
`;

const LocationButton = styled.button`
  display: flex;
  border: 1px solid var(--light-orange);
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;
  background: white;
  color: var(--primary-orange);
  margin: 0.5rem auto 1rem;
  padding: 0.2rem 0.3rem;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  padding: 1rem;
`;
