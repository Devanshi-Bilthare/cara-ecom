import React, { useContext } from 'react'
import styled from 'styled-components';
import AboutImage from '../images/b2.jpg'
import whoWeAre from '../images/a6.jpg'
import Features from '../Components/Features';


const About = () => {


  return (
    <Container>
     
     <div className="page-header">
        <img src={AboutImage} alt="" />
        <h2>#readmore</h2>
        <p>Uncover the Story Behind Our Success: Learn More About Who We Are</p>
      </div>
      <div className='aboutContent'>
        <img src={whoWeAre} alt="who we are" />
        <div className="aboutText">
          <h2>Who We Are?</h2>
          <p>Welcome to our ecommerce website! We are a team of dedicated individuals 
            who strive to bring you the best products at affordable prices. Our mission 
            is to provide excellent customer service and a seamless shopping experience.
            We believe in offering a wide variety of items to fit every need and taste.
            Thank you for choosing us as your go-to online destination for all your
            shopping needs!</p>
        </div>
      </div>
      <Features />
    </Container>
   
  )
}

const Container = styled.div`
.page-header {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
   

    img{
      position: absolute;
      height:50vh ;
      width: 100%;
    }
    h2{
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    h2,
    p {
      color: #fff;
      position: relative;
      top: 10%;
    }
  }
.aboutContent{
  display: flex;
  padding: 50px 80px;
  img{
    width: 600px;
    border-radius: 5px;
  }
  h2{
    margin-left: 30px;
    margin-top: 50px;
    font-size: 70px;
    font-weight: 600;
    text-transform: capitalize;
  }
  p{
    margin: 10px 0 0 30px;
    font-size: 25px;
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}){
  .page-header{
    height:35vh;
    img{
      height: 35vh;
    }
    h2{
      font-size: 40px;
    }
    p{
      font-size: 20px;
      margin-top: 5px;
    }
  }

  .aboutContent{
    padding:30px 40px 0 40px;
    flex-direction: column;
    img{
      height: 250px;
      width: 330px;
    }
    h2{
      margin-left: 0px;
     margin-top: 20px;
    font-size: 50px;
    }
    p{
      margin: 5px 0;
    font-size: 20px;
    }
  }
}
`

export default About;

