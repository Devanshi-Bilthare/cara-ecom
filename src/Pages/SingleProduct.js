import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontext';
import styled from 'styled-components';
import FeatureProducts from '../Components/FeatureProducts';
import FormatPrice from '../Helpers/FormatPrice';
import {CiDeliveryTruck} from 'react-icons/ci';
import {TbReplace} from 'react-icons/tb';
import {MdSecurity} from 'react-icons/md';
import Star from '../Components/Star';
import AddToCart from '../Components/AddToCart';

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  
  const {id} = useParams();
 

  const {id:alias,image, name, company, price, description, category,stars,stock} = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  
  }, [])

  if(isSingleLoading){
    return <div className='page_loading'>
      Loading...............
    </div>
  }
  
  return (
    <Container>
      <div className="product-details">
        
        <img src={image[0].url} alt="" />
        <div className="sproduct-data">
          <h5>{category}</h5>
          <h2>{name}</h2>
          <h6>{company}</h6>
          <h1> <FormatPrice price={price} /></h1>
          <div className="warranty">
            <div className="Warranty-data">
              <CiDeliveryTruck className='warranty-icon'/>
              <p>Free Delivery</p>
            </div>
            <div className="Warranty-data">
              <TbReplace className='warranty-icon'/>
              <p>30 Days Replacement</p>
            </div>
            <div className="Warranty-data">
              <CiDeliveryTruck className='warranty-icon'/>
              <p>Truck Delivery</p>
            </div>
            <div className="Warranty-data">
              <MdSecurity className='warranty-icon'/>
              <p>3 Year Warranty</p>
            </div>
          </div>
          <p className='stock'>Available : {stock> 0 ? "In Stock" : "Not Available"}</p>
          <Star stars={stars}/>
          {
            stock > 0 && <AddToCart product={singleProduct} />
          }
          
        </div>
      </div>
        <h3 className='desc-heading'>Product Details</h3>  
          <p className='desc'>{description}</p>
     

      <FeatureProducts />
    </Container>
  )
}

const Container = styled.div`
/* border: 2px solid black; */
padding:200px 80px 50px 80px;
.product-details{
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  max-width: 80%;
}
img{
  max-width: 450px;
  max-height:500px !important;
  border-radius: 10px;
}

.sproduct-data{
  max-width:600px ;
 padding: 20px;
  h5{
    font-size: 25px;
    font-weight: 600;
    text-transform: capitalize;
  }
  h2{
    font-size: 40px;
    text-transform: capitalize;
    font-weight: 600;
    margin-top: 25px;
  }
  h6{
    font-size: 25px;
    margin-top: 10px;
    text-transform: capitalize;
    font-weight: 400;
    /* color:; */
  }
  h1{
    color: black;
    margin-top:25px ;
  }
  p{
    margin-top: 15px;
    font-size: 22px;
  }
}
.desc-heading{
    font-size: 50px;
    font-weight: 500;
    transform: translateY(-30px);
}
.desc{
    font-size: 23px;
    transform: translateY(-20px);
}

.warranty{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .Warranty-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    p{
      font-size: 18px !important;
    }
  }
  .warranty-icon{
    font-size: 35px;
  }
}
.stock{
  font-size: 22px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.helper};
}

@media (max-width: ${({theme}) => theme.media.mobile}){
padding: 100px 40px 0 40px;
.product-details{
  flex-direction: column;
  img{
    width: 300px;
  }
}
.desc-heading{
  font-size: 40px;
  margin-top: 15px;
  transform: translateY(0);
}
.desc{
    font-size: 20px;
    margin-top: 10px;
    transform: translateY(0);
}
}
`

export default SingleProduct



