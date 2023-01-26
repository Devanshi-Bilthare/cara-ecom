import React from 'react'
import styled from 'styled-components';
import BgImage from '../images/Group-2.png'

function BackgroundImage() {
  return (
    <Container>
         <img src={BgImage} alt="" />         
    </Container>
  )
}

export default BackgroundImage;

const Container = styled.div`
    img{
    height: 90vh;
    width: 100%;
    margin-top: 80px;
    }
@media (max-width: ${({theme}) => theme.media.mobile}){
  img{
    height: 70vh;
    width: 300%;
    overflow: hidden;
    transform: translateX(-43%);
  }
}
    
`