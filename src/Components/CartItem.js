import React from 'react'
import CartAmountToggle from './CartAmountToggle';
import {CiCircleRemove} from 'react-icons/ci';
import { useCartContext } from '../context/cartContext';

const CartItem = ({id, name,image,color,price,amount}) => {
    const {removeItem, setDecrease,setIncrease} = useCartContext();
    // const setDecrease = ()=>{
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1);  
    //   }
    //   const setIncrease = ()=>{
    //     //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
    //   }
  return (
    <div className="cart-header para">
         <div className="cart-remove remove">
            <CiCircleRemove onClick={() => removeItem(id)} />
         </div>
        <div className="cart-image image cart-hide">
            <img src={image} alt={id} />
            <div className="color-name ">
                <p>color</p>
                <div className='color-style' style={{backgroundColor:color,color:color}}></div>
            </div>
        </div>
        <div className="cart-name  product">
            <p>{name}</p>
        </div>
        <div className="cart-price cart-hide price">
            <p>{price}</p>
        </div>
        <div className="quantity">
        <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
         />
        </div>
        
         <div className="cart-hide cart-subtotal subtotal">
            <p>{price* amount}</p>
         </div>
        
    </div>
  )
}

export default CartItem