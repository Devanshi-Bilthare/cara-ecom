import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {

  return (
    <div className='cart-button'>
        <div className="amount-toggle">
            <button onClick={() => setDecrease()}> <AiOutlineMinus/> </button>
            <div className="amount-style">
                {amount}
            </div>
            <button onClick={() => setIncrease()}> <AiOutlinePlus/> </button>
        </div>
    </div>
  )
}

export default CartAmountToggle