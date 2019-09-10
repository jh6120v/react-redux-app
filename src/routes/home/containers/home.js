import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Logo, Title } from '../styles';
import logoReact from '../../../assets/images/react.png';
import logoRedux from '../../../assets/images/redux.png';
import { respondTo } from '../../../styles/_mixin';

const backAndForth = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: calc(100% - 2rem);
    background-color: #8660C2;
  }
  100% {
    left: 0;
  }
`;

const LogoLink = styled.div`
  width: 80px;
  margin: 0 10px;
  position: relative;
  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: #62DAFB;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: calc(50% - 0.5rem);
    transition: all 1s ease-in-out;
    animation: ${backAndForth} 1.7s infinite;
  }
  ${respondTo.xs`
    &:before {
      width: 2rem;
      height: 2rem;
      top: calc(50% - 1rem);
    }
  `}
`;

const Home = () => (
    <Container>
        <Logo img={logoReact} />
        <LogoLink />
        <Logo img={logoRedux} />
        <Title>Welcome to React-Redux-App!</Title>
    </Container>
);

export default Home;
