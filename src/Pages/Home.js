import React from 'react';
import styled from 'styled-components';
import Hero from '../Components/Hero';
import FeatureProducts from '../Components/FeatureProducts';



const Home = () => {
  return (
   <Container>
        <Hero />
        <FeatureProducts />
   </Container>
  )
}


const Container = styled.section`
/* height: 100vh; */

`

export default Home;
