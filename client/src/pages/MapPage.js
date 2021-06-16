import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import {useEffect, useState} from 'react';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function MapPage() {
  return (
    <>
      <MapWrapper id={'mapid'}>
        <MapContainer
          center={[48.137, 11.575]}
          zoom={10}
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
        </MapContainer>
      </MapWrapper>
    </>
  );
}

const MapWrapper = styled.div`
  .leaflet-container {
    height: 159vw;
  }
`;
