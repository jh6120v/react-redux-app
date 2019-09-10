import styled, { keyframes } from 'styled-components';
import { respondTo } from '../../../styles/_mixin';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  padding: 30px 15px;
  background: #e2e2e2;
  background: -moz-linear-gradient(45deg,  #e2e2e2 0%, #dbdbdb 50%, #d1d1d1 51%, #fefefe 100%);
  background: -webkit-linear-gradient(45deg,  #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%);
  background: linear-gradient(45deg,  #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 );
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.div`
  width: calc((100% - 100px) / 2);
  height: 200px;
  background: url(${(props) => props.img}) no-repeat center;
  background-size: contain;
  animation: ${rotate} 3s linear infinite;
  ${respondTo.sm`
    width: 220px;
  `}
`;

const Title = styled.h1`
  width: 100%;
  font-size: 40px;
  text-align: center;
  padding: 30px 0;
`;

const SubTitle = styled(Title)`
  font-size: 25px;
  padding: 20px 0;
`;

export {
    Container,
    Logo,
    Title,
    SubTitle
};
