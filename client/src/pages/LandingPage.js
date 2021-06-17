import styled from 'styled-components';
import Background from '../images/background-image.png';
import NavFooterLP from '../components/NavFooterLP';

export default function LandingPage() {
  return (
    <>
      <TitleWrapper>
        <h1>Welcome to Nomad-Spot!</h1>
        <UpperText>Spot other DNs and start networking with them.</UpperText>
        <MiddleText>Find Co-Working-Spaces all over the world.</MiddleText>
        <LastText>Create Spots by your own to help other DNs.</LastText>
      </TitleWrapper>
      <NavFooterLP />
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  h1 {
    text-align: center;
    margin: 0.5rem;
    letter-spacing: 0.25rem;
  }
  h3 {
    margin: 1.4rem 0.3rem 0 0.3rem;
    font-weight: 500;
    font-size: 1rem;
  }
`;

const UpperText = styled.h3`
  display: inline-flex;
  justify-content: center;
  position: relative;
  left: 2.5rem;
`;
const MiddleText = styled.h3`
  display: inline-flex;
  justify-content: center;
  position: relative;
  right: 3.5rem;
`;
const LastText = styled.h3`
  display: inline-flex;
  justify-content: center;
  position: relative;
`;
