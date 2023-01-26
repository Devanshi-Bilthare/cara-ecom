import React from 'react';
import ButtonBack from '../images/button-background.png';
import styled from 'styled-components';

const ButtonBg = () => {
  return (
       <Container>
          <img src={ButtonBack} alt="" />
          <button className='font'>Shop Now</button>
       </Container> 
    )
}

export default ButtonBg;

const Container = styled.div`
    position: relative;
  /* text-align: center; */

button{
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 20px;
  top: 14px;
  left: 60px;
  color: ${({theme}) => theme.colors.helper};
  cursor: pointer;
  font-weight: 600;
}
`