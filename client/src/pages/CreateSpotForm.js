import styled from 'styled-components';
import {useState} from 'react';

export default function CreateSpotForm() {
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
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <label>User Name:</label>
        <input type="text" name="userName" />

        <label>E-Mail to reach you:</label>
        <input type="email" name="email" />

        <label>Search or offer something:</label>
        <input type="text" name="further" />

        <section>
          <div>
            <label htmlFor="openToMeet">Open to meet other DNs:</label>
          </div>
          <div>
            <input type="radio" value="yes" name="openToMeet" id="yes" />
            <label for="yes">Yes</label>
          </div>
          <div>
            <input type="radio" value="no" name="openToMeet" id="no" />
            <label for="no">No</label>
          </div>
        </section>

        <label>Latitute:</label>
        <input type="text" name="lat" value={lat} />

        <label>Longtitute:</label>
        <input type="text" name="long" value={lng} />

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
