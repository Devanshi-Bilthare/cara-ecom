import React from 'react';
import styled from 'styled-components';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';
import {BsPinterest,BsYoutube} from 'react-icons/bs';
// import Logo from "../assets/Group-1.png";
// import Play from "../assets/play.jpg";
// import Pay from "../assets/pay.png";
// import Appbtn from "../assets/app.jpg";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Footer() {
    const navigate = useNavigate();

  return (
    <Container className="section-p1">
        <div className="footer">
        <div className="col">
            {/* <img src={Logo} alt="" /> */}
            <h4>Contact</h4>
            <p><strong> Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i><FaFacebookF/></i>
                    <i><AiOutlineTwitter/></i>
                    <i><AiOutlineInstagram/></i>
                    <i><BsPinterest/></i>
                    <i><BsYoutube/></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <NavLink to ="/about">
            <button className="font">About Us</button>
            </NavLink>
            <button className="font">Delievery Information</button>
            <button className="font">Privacy Policy</button>
            <button className="font">Terms & Conditions</button>
            <NavLink to="/contact">
            <button className="font">Contact Us</button>
            </NavLink>
          
        </div>
        <div className="col ">
            <h4>My Account</h4>
            <NavLink to="/signin">
            <button className='font'>Sign In</button>
            </NavLink>
            <NavLink to="/cart">
            <button className="font">View Cart</button>
            </NavLink>
            <button className="font">My Wishlist</button>
            <button className="font">Track My Order</button>
            <button className="font">Help</button>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store  or Google Play</p>
            <div className="row">
                {/* <img src={Appbtn} alt="" /> */}
                {/* <img src={Play} alt="" /> */}
            </div>
            <p>SEcured Payment Gateways</p>
            {/* <img src={Pay} alt="" /> */}
        </div>
        <div className="copyright">
            <p>@ 2023, Tech2 etc React Ecommerce Website</p>
        </div>
        </div>

    </Container>
  )
}

const Container = styled.div`
    .footer{
        display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 80px;
    }

.col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    button{
        font-size: 18px;
        text-decoration: none;
        color: #43514b;
        margin-bottom: 10px;
        border:none;
        background-color: transparent;
    }
}

.logo{
    margin-bottom: 30px;
}

h4{
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 20px;

}

p{
    font-size: 18px;
}


.follow{
    margin-top:20px;
    i{
        color: #465b52;
        padding-right: 7px;
        cursor: pointer;
        font-size: 18px;
    }
}



.install{
    img{
       margin-top: 10px;
       margin-bottom: 15px;
    }
    .row {
        img{
         border: 1px solid #088178;
         border-radius: 6px;
         margin: 10px 6px 15px 0;
    } 
}
} 


.follow i:hover,
button:hover{
    color: ${({theme}) => theme.colors.helper};
}

.copyright{
    width: 100%;
    text-align: center;
}

@media (max-width: ${({theme}) => theme.media.mobile}){
.footer{
    padding: 40px;
}
}

`
