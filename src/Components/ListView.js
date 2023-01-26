import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';

const ListView = ({products}) => {
  return (
    <Container>
        <div className="list-container">
            {
                products.map((curElem) => {
                    const{id, name, image, price, description} = curElem;
                    return(
                       <div className="card">
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className='card-data'>
                                <h3>{name}</h3>
                                <p className='price'><FormatPrice price={price} /></p>
                                <p className='desc'>{description.slice(0,99)}...</p>
                                <NavLink to={`/sProduct/${id}`}>
                                    <button className='btn'>Read More</button>
                                </NavLink>
                            </div>
                       </div>
                    )
                })
            }
        </div>
    </Container>
  )
}


const Container = styled.div`
margin-top: 30px;
.card{
    margin:30px 0;
    display: flex;
    border-radius: 16px;
    padding:10px;
    border: 2px solid  ${({theme}) => theme.colors.helper};
    figure {
    width: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden; 
    transition: all 0.5s linear;
    border-radius: 1rem;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;

    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      height: 26rem;
      transition: all 0.2s linear;
      border-radius: 16px;
    }
}
}

.card-data{
    padding:25px 30px;

    h3{
        font-size: 30px;
        text-transform: capitalize;
    }

    .price{
        font-size: 20px;
        margin-top: 10px;
    }
    .desc{
        font-size: 18px;
        margin-top: 10px;
    }

   
.btn{
    background-color:${({theme}) => theme.colors.helper};
    color: #fff;
    padding: 15px 20px ;
    border-radius: 5px;
    font-size: 23px;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 1px;
    border: 2px solid #fff;
    margin-top: 20px;

    &:hover{
        border-color:${({theme}) => theme.colors.helper};
    }
}
}

@media (max-width: ${({theme}) => theme.media.mobile}){
    .card{
        flex-direction: column;
    }
}
`

export default ListView