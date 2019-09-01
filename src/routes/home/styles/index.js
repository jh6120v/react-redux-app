import styled from 'styled-components';
import logo from '../../../assets/images/react-redux.png';

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

const Logo = styled.div`
  width: 100%;
  height: 200px;
  background: url('${logo}') no-repeat center center;
  background-size: contain;
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
