import React, { useState } from 'react';
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const AddToCart = ({product}) => {
    const {addToCart} = useCartContext();
    const {id,colors,stock} = product;
    const [color,setColor] = useState(colors[0]);
    const [amount,setAmount] = useState(1);
    const setDecrease = ()=>{
      amount > 1 ? setAmount(amount - 1) : setAmount(1);  
    }

    const setIncrease = ()=>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <Container>
        <div className="colors">
            <p>
                Colors:
                {colors.map((curColor, index) => {
                    return (
                    <button key={index} style={{backgroundColor:curColor}}
                     className={color === curColor ? "btnStyle active" : "btnStyle"}
                     onClick={() => setColor(curColor)}
                    >
                        {color === curColor ? <FaCheck className='check'/> : null}
                    </button>
                    )
                })}
            </p>
        </div>

        {/* add to cart  */}
        <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />

        <NavLink to="/cart" 
                 onClick={()=> addToCart(id,color,amount,product)}     
                    >
                <button className='btn'>Add To Cart</button>
        </NavLink>
    </Container>
  )
}


const Container = styled.div`
.colors {
    p{
    display: flex;
    font-size: 25px;
    font-weight: 400;
    }

    .btnStyle{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 7px;
        border: none;
        opacity: 0.5;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            opacity: 1;
        }
        .check{
            font-size: 17px;
            color: #fff;
        }
    }
    .active{
        opacity: 1;
    }
}

.amount-toggle{
    display: flex;
    align-items: center;

    button{
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        font-size: 25px;
        padding: 20px 25px;
    }

    .amount-style{
        font-size: 25px;
    }
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

    &:hover{
        border-color:${({theme}) => theme.colors.helper};
    }
}

`


export default AddToCart