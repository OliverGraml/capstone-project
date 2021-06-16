import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavFooterLP() {
  return (
    <NavWrapper>
      <NavLink exact to="/MapPage">
        <NavIconMap>Start with the map.</NavIconMap>
      </NavLink>
      <NavLink exact to="/ListView">
        <NavIconView>Start list view.</NavIconView>
      </NavLink>
      <NavLink exact to="/CreateSpotForm">
        <NavIconSpot>Tell others your spot.</NavIconSpot>
      </NavLink>
      <NavLink exact to="/CreateLocationForm">
        <NavIconLocation>Create a location.</NavIconLocation>
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.footer`
  display: grid;
  grid-template-columns: 144px 144px;
  grid-template-rows: 144px 144px;
  justify-content: center;
  position: relative;
  top: 10rem;
  bottom: 2rem;
`;
const NavIconMap = styled.button`
  display: inline-block;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  height: 9rem;
  width: 9rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
`;
const NavIconView = styled.button`
  display: inline-block;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  height: 7rem;
  width: 7rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
`;
const NavIconSpot = styled.button`
  display: inline-block;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  height: 6rem;
  width: 6rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
`;
const NavIconLocation = styled.button`
  display: inline-block;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  height: 5rem;
  width: 5rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
`;
