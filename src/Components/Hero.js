import React from 'react'
import styled from 'styled-components';
import ButtonBg from './ButtonBg';
import { NavLink } from 'react-router-dom';
import BackgroundImage from './BackgroundImage';
import Features from './Features';

const Hero = () => {
    return (
        <Container>
           <BackgroundImage />
           <div className="hero">
              <h4>Trade-in-offer</h4>
              <h2>Super value deals</h2>
              <h1>On all products</h1>
              <p>Save more with coupouns & up to 70% off!</p>
              <NavLink to="/shop" >
               <ButtonBg/>
             </NavLink>
           </div>
           <Features />
             
        </Container>
       )
}

const Container = styled.section`
 position: relative;

.hero{
    position: absolute;
    top: 250px;
    left:80px ;
    h1{
        font-size: 8rem;
        font-weight: 700;
    }
    h2{
        font-size: 9rem;
        font-weight: 600;
        margin-top: 20px;
    }
    h4{
        font-size: 3.5rem;
        font-weight: 600;
        color: ${({theme}) => theme.colors.heading};
    }
    p{
        margin: 25px 0;
    }

}

@media (max-width: ${({theme}) => theme.media.mobile}){
.hero{
    left: 40px;
    h1{
        font-size: 6rem;
        font-weight: 600;
    }
    h2{
        font-size: 5rem;
        font-weight: 600;
    }h1{
        margin-top: 20px;
    }
}
}

`

export default Hero