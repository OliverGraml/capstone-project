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
            <h3>{spot.username}</h3>
            <p>
              {spot.meet_others
                ? 'Open to meet!'
                : 'Not interested in meet up´s!'}
            </p>
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
  z-index: 1;
  position: relative;
  .leaflet-container {
    height: 159vw;
  }
`;
const ZoomInfo = styled.div`
  display: flex;
  top: 13%;
  left: 27%;
  opacity: 0.8;
  position: absolute;
  z-index: 100;
  border: solid 1px var(--light-grey);
  border-radius: 0.3rem;
  background-color: var(--dark-orange);
  color: black;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
`;
