import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/cartContext";
import cartImage from "../images/abotbann.png";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const {cart,clearCart,total_amount,shiping_fee} = useCartContext();
  const { user, isAuthenticated } = useAuth0();
  if(cart.length === 0){
    return(
      <EmptyDiv>
        <h2>No Cart Item</h2>
      </EmptyDiv>
    )
  }
  return (
    <Container>
      <div className="page-header">
        <img src={cartImage} alt="" />
        <h2>#cart</h2>
        <p>Add your coupon code & SAVE upto 70%! </p>
      </div>

      {
        isAuthenticated && (
          <div className="loggedDetails">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        )
      }
      <div className="cart-header cart-border">
        <p className="remove">Remove</p>
        <p className="cart-hide image">Image</p>
        <p className=" product">product</p>
        <p className="cart-hide price">Price</p>
        <p className="quantity">Quantity</p>
        <p className="cart-hide subtotal">Subtotal</p>
      </div>

      <div className="cart-item">
        {
          cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />
          })
        }
      </div>
      <div className="two-cart-button">
        <NavLink to="/shop">
          <button>Continue Shoping</button>
        </NavLink>
        <button onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="subtotalContent">
          <div>
            <p>subtotal </p>
            <p>shipping fee </p>
            <p>grandTotal</p>
          </div>
          <div >
            <p>{total_amount}</p>
            <p>{shiping_fee}</p>
            <p>{total_amount + shiping_fee}</p>
          </div>
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

    img {
      position: absolute;
      height: 50vh;
      width: 100%;
    }
    h2 {
      font-size: 70px;
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

  .loggedDetails{
    display: flex;
    align-items: center;
    padding: 40px 80px 0 80px;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      cursor: pointer;
    }
    h2{
      margin-left: 10px;
    }
  }


  .cart-border{
    border-top: .7px solid #7DCEA0;
    border-bottom: .7px solid #7DCEA0;
  }
  .cart-header{
    display:flex;   
    /* justify-content:space-between;  */
    margin: 40px 80px;
    /* background-color: red; */
    padding:15px 40px;
    p{
      text-transform: uppercase;
      font-size: 22px;
      letter-spacing: 1px;
      font-weight: 600;
      color: black;
    }
    .remove{
      width: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image{
      width: 250px;
      text-align: center;
    }
    .product{
      width: 250px;
    text-align: center;
    display: flex;
      justify-content: center;
      align-items: center;
    }
    .price,.quantity,.subtotal{
      width: 215px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .cart-remove{
    font-size: 30px;
    color: ${({theme}) => theme.colors.helper};
    cursor: pointer;
    transition: .3s all ;
    &:hover{
      color: #D12318;
    }
  }

  .cart-items{
    border: none;
  }
  .cart-image{
    display: flex;
    justify-content: center;
   img{
    width: 100px;
   }
   .color-name{
    margin-left: 5px;
    p{
      font-size: 18px;
      font-weight: 400;
      text-transform: capitalize;
    }
    .color-style{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-left: 10px;
    }
   }
  }

  .para{
    p{
      font-size: 25px;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  .two-cart-button{
    padding: 20px 500px;
    display: flex;
    justify-content: space-around;
    button{
      padding: 10px 15px;
      font-size: 28px;
      background-color:${({theme}) => theme.colors.helper};
      border: 2px solid #fff;
      color: #fff;
      border-radius: 10px;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover{
        border: 2px solid ${({theme}) => theme.colors.helper};
      }
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
        cursor: pointer;
    }

    .amount-style{
        font-size: 25px;
    }
}

.subtotalContent{
  width: 300px;
  /* background-color: red; */
  border: 2px solid ${({theme}) => theme.colors.helper};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-transform: capitalize;
  margin: 30px 600px;

  p{
   font-size: 28px;
   color: black;
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}){
  .page-header{
    height:35vh;
    img{
      height: 35vh;
    }
    h2{
      font-size: 40px;
    }
    p{
      font-size: 20px;
      margin-top: 5px;
    }
  }
  .loggedDetails{
    padding: 20px 40px 0 40px;
  }

  .cart-hide{
    display: none !important;
  }

  .cart-header{
    margin: 40px;
    padding:15px 0px;
    p{
      font-size: 15px;
      letter-spacing: 0px;
    }
    .product{
      width: 200px;
    }
    .quantity{
      width: 150px;
    }
  }

  
  .para{
    p{
      font-size: 20px;
    }
  }

  .two-cart-button{
    padding:0 40px 30px 40px;
    display: flex;
    button{
      padding: 5px 10px;
      font-size: 20px;
  }
}

  

  .amount-toggle{
    display: flex;
    align-items: center;
    button{
        font-size: 20px;
        padding: 0px 15px;
    }

    .amount-style{
        font-size: 20px;
    }
}

.subtotalContent{
  margin: 0px 55px;
  border-radius: 5px;
}

  }
`

const EmptyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0 110px 0;
  h2{
    font-size: 70px;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 2px;
  }
`
export default Cart;
