import React from 'react';
import styled from 'styled-components';
import Logo from '../images/Group-1.png';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src={Logo} alt="" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
}


const MainHeader = styled.header`
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
height: 10rem;
padding: 0 80px;
background: ${({theme}) => theme.colors.bg};
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
position:fixed;
z-index: 999999;
@media (max-width: ${({theme}) => theme.media.mobile}){
  padding: 0 40px;
}
`

export default Header