import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import styled from 'styled-components';
import {useEffect, useState} from 'react';

export default function MapPage({personalSpots}) {
  const [positionClicked, setPositionClicked] = useState(false);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
        setPositionClicked(true);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 10);
      },
    });
    return position === null ? null : (
      <>
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
        <markers />
      </>
    );
  }

  function RenderSpots() {
    return personalSpots.map((spot) => (
      <>
        <Marker key={spot} position={[spot.latitude, spot.longitude]}>
          <Popup>
            <UserName>{spot.username}</UserName>
            <p>
              {spot.meet_others
                ? 'Open to meet!'
                : 'Not interested in meet up´s!'}
            </p>
            <p>Info: {spot.further_info}</p>
            <p>Contact: {spot.email}</p>
          </Popup>
        </Marker>
      </>
    ));
  }
  return (
    <>
      {!positionClicked && <ZoomInfo>Click to get your position!</ZoomInfo>}
      <MapWrapper id={'mapid'}>
        <MapContainer
          center={[48.137, 11.575]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[48.137, 11.575]}>
            <Popup>Hallo Welt!</Popup>
          </Marker>
          <LocationMarker />
          <RenderSpots />
        </MapContainer>
      </MapWrapper>
    </>
  );
}

const MapWrapper = styled.div`
  position: relative;
  .leaflet-container {
    height: 159vw;
  }
  z-index: 1;
`;
const ZoomInfo = styled.div`
  background-color: var(--dark-orange);
  border: solid 1px var(--light-grey);
  border-radius: 0.3rem;
  color: black;
  display: flex;
  font-weight: 600;
  left: 27%;
  opacity: 0.8;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: 13%;
  z-index: 100;
`;

const UserName = styled.h3`
  text-decoration: underline;
`;
