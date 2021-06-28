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
  justify-content: space-between;
  height: 4.5rem;
  padding-left: 0.5rem;
  margin: 0;
`;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  cursor: pointer;
  opacity: 1;
  :hover {
    opacity: 0.4;
  }
`;
