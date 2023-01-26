import React from "react";
import styled from "styled-components";
import { BsMap, BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import contactImage from '../images/abotbann.png';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <div className="page-header">
        <img src={contactImage} alt="" />
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you! </p>
      </div>
      <div className="contact-details">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>
              <BsMap className="icon" />
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <FiMail className="icon" />
              <p>contact@example.com</p>
            </li>
            <li>
              <BsFillTelephoneFill className="icon" />
              <p>contact@example.com</p>
            </li>
            <li>
              <AiOutlineClockCircle className="icon" />
              <p>Mondat to Saturday: 9.00am to 4.00pm</p>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.2369526098782!2d-4.250819884157801!3d55.85855518058184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a1bd9f3a95%3A0xdbd45e47fa28046d!2sGadgetsandGizmos!5e0!3m2!1sen!2sin!4v1672727915483!5m2!1sen!2sin"
          width="700"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="form-details">
        <form action="https://formspree.io/f/meqwqevv" method="post">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="username"
            value={isAuthenticated ? user.name : ""}
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="emailInput"
            placeholder="E-Mail"
            name="email"
            value={isAuthenticated ? user.email : ""}
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            autoComplete="off"
          ></textarea>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </Container>
  );
};

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

  .contact-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 80px;

    .details {
      width: 40%;
    }
  }
  span {
    font-size: 15px;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 35px;
    font-weight: 600;
    line-height: 35px;
    padding: 20px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 15px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .icon {
    font-size: 15px;
  }

  p {
    margin: 0 0 0 15px;
    font-size: 20px;
  }

  .emailInput{
    text-transform: lowercase !important;
  }

  .form-details {
    margin: 30px 80px;
    padding: 80px;
    border: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;

    form {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* background-color: red; */
      input,
      textarea {
        width: 100%;
        padding: 12px 15px;
        outline: none;
        margin-bottom: 20px;
        border: 1px solid #e1e1e1;
        font-size: 18px;
        text-transform: capitalize;
      }
      .button{
        background-color:${({theme}) => theme.colors.helper};
        color: #fff;
        padding: 20px;
        border-radius: 5px;
        font-size: 22px;
        border: 2px solid #fff;

        &:hover{
          border-color: ${({theme}) => theme.colors.helper};
        }
      }
    }
  }

  
@media (max-width: ${({theme}) => theme.media.mobile}){
.page-header{
  img{
    height: 30vh;
  }
  p{
    font-size:16px ;
  }
}
 .contact-details{
  flex-direction: column;
  padding: 0 40px;
  .details{
    width: 100%;
  }
 }  
 h2{
  font-size: 30px;
 }  

 .form-details{
  margin: 10px 40px;
  padding: 10px;
 }
 form{
  width: 100%;
 }
}
`;

export default Contact;
