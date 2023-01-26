import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({products}) => {
    // console.log(products)
  return (
   <Container>
        <div className="grid-container">
            {
                products.map((curElem, id) => {
                    return (
                        <Product key={curElem.id} {...curElem} />
                    )
                })
            }
        </div>
   </Container>
  )
}


const Container = styled.div`
margin-top: 20px;
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
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 1rem;
    }
    caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
}

.grid-container{
    display: flex;
    padding-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    background-color: #fff;
    border-radius: 1rem;
    border: 1px solid #cce7d0;
    margin-bottom:20px;
    .card-data {
      padding:20px;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    p{
      color: ${({ theme }) => theme.colors.helper};
      font-size: 20px;
      margin-top: 10px;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
}



`
export default GridView