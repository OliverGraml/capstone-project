import {useEffect, useState} from 'react';
import styled from 'styled-components';

export default function ListView({spots}) {
  console.log(spots);
  const [currentPosition, setCurrentPosition] = useState([]);
  const [spotsSortedByDistance, setSpotsSortedByDistance] = useState([]);
  const [status, setStatus] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const newPosition = [];

  function sortByNearest(a, b) {
    return a.distance - b.distance;
  }

  useEffect(() => {
    setCurrentPosition([lat, lng]);
  }, [lat, lng]);

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
          //newPosition.push([position.coords.latitude]);
          //newPosition.push(position.coords.longitude);
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  }

  //getLocation();

  console.log('Position', currentPosition);
  useEffect(() => {
    const spotsWithDistance = spots.map((spot) => {
      spot.distance = calculateDistance(
        currentPosition[0],
        currentPosition[1],
        spot.latitude,
        spot.longitude,
        'K'
      );
      return spot;
    });
    setSpotsSortedByDistance(spotsWithDistance.sort(sortByNearest));
  }, [currentPosition, spots]);

  return (
    <>
      <RadiusSearchButton onClick={getLocation}>
        Click for radius search
      </RadiusSearchButton>
      {spotsSortedByDistance &&
        spotsSortedByDistance.map((spot) => (
          <SpotCard key={spot._id}>
            <TopWrapper>
              <UserName>{spot.username} </UserName>
            </TopWrapper>
            <MainWrapper>
              <h4>
                {spot.meet_others
                  ? 'Open to meet!'
                  : 'Not interested in meet up´s!'}
              </h4>
              <p>Distance: {spot.distance.toFixed(2)} km</p>
              <p>Info: {spot.further_info}</p>
              <p>Contact: {spot.email}</p>
            </MainWrapper>
          </SpotCard>
        ))}
    </>
  );

  function calculateDistance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }
}

const SpotCard = styled.article`
  background-color: var(--light-orange);
  border: 1px solid var(--dark-orange);
  border-radius: 0.4rem;
  color: var(--dark-orange);
  height: 10rem;
  padding: 1rem 1.5rem;
  margin: 1.5rem auto;
  opacity: 0.8;
  width: 80%;
`;

const TopWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
const RadiusSearchButton = styled.button`
  background: white;
  border: 1px solid var(--light-orange);
  border-radius: 0.4rem;
  cursor: pointer;
  color: var(--primary-orange);
  display: flex;
  font-size: 1rem;
  margin: 0.5rem auto 1rem;
  padding: 0.2rem 0.3rem;
`;

const UserName = styled.h3`
  text-decoration: underline;
`;
