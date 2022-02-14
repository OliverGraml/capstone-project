import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {ReactComponent as Icon} from '../images/icon.svg';
import homeIcon from '../images/homeIcon.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <Icon />
      <NavLink exact to="/">
        <Img src={homeIcon} />
      </NavLink>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  margin: 0;
  padding-left: 0.5rem;
`;
const Img = styled.img`
  cursor: pointer;
  height: 4rem;
  margin: 0.5rem;
  opacity: 1;
  :hover {
    opacity: 0.4;
  }
  width: 4rem;
`;
