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
  bottom: 2rem;
  display: grid;
  grid-template-columns: 144px 144px;
  grid-template-rows: 144px 144px;
  justify-content: center;
  position: relative;
  top: 6rem;
`;
const NavIconMap = styled.button`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 9rem;
  opacity: 0.7;
  text-decoration: none;
  text-align: center;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
  width: 9rem;
`;
const NavIconView = styled.button`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 7rem;
  opacity: 0.7;
  text-decoration: none;
  text-align: center;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
  width: 7rem;
`;
const NavIconSpot = styled.button`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 6rem;
  left: 6.9rem;
  opacity: 0.7;
  position: relative;
  transition: all 1s ease-in-out;
  text-decoration: none;
  text-align: center;
  top: -2rem;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
  width: 6rem;
`;
const NavIconLocation = styled.button`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 5rem;
  left: 4.5rem;
  opacity: 0.7;
  position: relative;
  text-decoration: none;
  text-align: center;
  top: -3rem;
  transition: all 1s ease-in-out;
  :hover {
    transform: scale(1.1);
    opacity: 0.9;
    color: red;
  }
  width: 5rem;
`;
