import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgClose, CgMenu} from "react-icons/cg";
import { useCartContext } from '../context/cartContext';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    const[menuIcon, setMenuIcon] = useState();
    const {total_item} = useCartContext();
    const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0();

  return (
    <Navbar>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" 
                             className="navbar-link home-link" 
                             onClick={()=> setMenuIcon(false)}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop"
                             className="navbar-link"
                             onClick={()=> setMenuIcon(false)}
                     >Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/about" 
                             className="navbar-link"
                             onClick={()=> setMenuIcon(false)}
                     >About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                             className="navbar-link" 
                             onClick={()=> setMenuIcon(false)}
                    >Contact</NavLink>
                </li>

                {isAuthenticated &&  <p className='loggedName'>{user.name}</p>}
                {isAuthenticated ? 
                    (<button className='logButton' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                    </button>) : 
                     (<li><button className='logButton' onClick={() => loginWithRedirect()}>Log In</button></li> )
                 }
               
               
                <li>
                    <NavLink to="/cart" className="navbar-link cart-trolley--link" >
                        <AiOutlineShoppingCart className='cart-trolley'
                         onClick={()=> setMenuIcon(false)}
                          />
                        <span className='cart-total--item'>{total_item}</span>
                    </NavLink>
                </li>
            </ul>

            {/* responsive */}

            <div className="mobile-navbar--btn">
                <CgMenu  name='menu-outline'
                         className='mobile-nav--icon'
                         onClick={()=> setMenuIcon(true)}
                />
                <CgClose  name='close-outline' 
                          className='mobile-nav--icon close-outline'
                          onClick={()=> setMenuIcon(false)}
                />
            </div>
        </div>
    </Navbar>
  )
}

export default Nav;

const Navbar = styled.nav`
/* position: fixed; */
.navbar-lists{
    display: flex;
    gap: 4.8rem;
    align-items: center;
    list-style: none;

    .navbar-link{
        &:link,
        &:visited{
            display: inline-block;
            text-decoration: none;
            font-size: 2rem;
            font-weight: 500;
            font-family: 'League Spartan';
            text-transform: capitalize;
            color: ${({theme}) => theme.colors.black};
            transition: color 0.3s linear;
        }
        &:hover,
        &:active{
            color:${({theme}) => theme.colors.helper}
        }
    }
}

.mobile-navbar--btn{
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
}

.mobile-nav--icon[name="close-outline"]{
    display: none;
}

.close-outline{
    /* display: none; */
    transform: translateX(-80%);
}

.loggedName{
    font-size: 20px;
}

.logButton{
    font-size: 20px;
    background-color:${({theme}) => theme.colors.helper};
    border: 2px solid ${({theme}) => theme.colors.bg};
    border-radius: 5px;
    padding: 2px 10px;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    &:hover{
        border-color:${({theme}) => theme.colors.helper};  
    }
}

.cart-trolley--link{
    position: relative;
    .cart-trolley{
        position: relative;
        font-size: 3rem;
    }

    .cart-total--item{
        width: 2.2rem;
        height: 2.2rem;
        position: absolute;
        /* background-color: #000; */
        color: #000;
        font-size: 1.4rem;
        border-radius: 50%;
        display: grid;
        place-items:center;
        top: -20%;
        left: 70%;
        background-color: ${({theme}) => theme.colors.helper};
    }
}

.user-login--name{
    text-transform: capitalize;
}

.user-logout,
.user-login{
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
}


@media (max-width: ${({theme}) => theme.media.mobile}){
    .mobile-navbar--btn{
        display:inline-block;
        z-index: 9999;
        border:${({theme}) => theme.colors.black};

        .mobile-nav--icon{
            font-size: 4.2rem;
            color: ${({theme}) => theme.colors.black};
        }
    }

    .active .mobile-nav--icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({theme}) => theme.colors.black};
        z-index: 9999;
    }

    .active .close-outline{
        display: inline-block;
    }

    .navbar-lists{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({theme}) => theme.colors.bg};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transform: translateX(-100%);
        /* transform-origin: top; */
        transition: all 3s linear;
    }

    .active .navbar-lists{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link{
            font-size: 4.2rem;
        }
    }

    .cart-trolley--link{
        position: relative;

        .cart-trolley{
            position: relative;
            font-size: 5.2rem;
        }

        .cart-total--item{
            width: 4.2rem;
            height: 4.2rem;
            font-size: 2rem;
        }
    }

    .user-logout,
    .user-login{
        font-size:2.2rem;
        padding: 0.8rem 1.4rem;
    }
}
`



