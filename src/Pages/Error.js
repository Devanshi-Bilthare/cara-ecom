import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
   <Container>
    {/* <div className="contain"> */}
      <h2>404</h2>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a mystery. But you can click the below button to go back to the homepage.
        </p>
        <NavLink to="/">
          <button>Go Back to Home Page</button>
        </NavLink>
    {/* </div> */}
       
   </Container>
  )
}

const Container = styled.div`
padding:130px 40px 20px 40px;
display: flex;
flex-direction: column;
align-items: center;
h2{
  font-size: 50px;
  margin-top: 5px;
}
p{
  font-size: 22px;
  margin-top: 15px;
}

button{
  margin-top: 25px;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.helper};
  font-weight: 400;
  cursor: pointer;
  opacity: 0.5;
  transition:all 0.5s linear;
  &:hover{
  opacity: 1;
  }
}
`

export default Error