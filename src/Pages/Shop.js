import React from 'react'
import styled from 'styled-components'
import FilterSection from '../Components/FilterSection'
import ProductList from '../Components/ProductList'
import Sort from '../Components/Sort'
import { useFilterContext } from '../context/filterContext'
import ShopImage from '../images/b1.jpg'

const Shop = () => {
 
  return (
   <Container>
      <div className="page-header">
        <img src={ShopImage} alt="" />
        <h2>#stayhome</h2>
        <p>Discover the world of shopping at Cara - Where Quality Meets Affordability</p>
      </div>
      <div className="product-container">
          <div>
            <FilterSection />
          </div>
          <section className='product-view-sort'>
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>
      </div>
   </Container>
  )
}


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
      top:10%;
    }
 }

 .product-container{
  padding: 0 80px;
  display: flex;
  .product-view-sort{
    width: 1000px;
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

  .product-container{
    flex-direction: column;
    padding: 0 40px;
  }

  .product-view-sort{
    width: 100% !important;
  }
 } 
 `
export default Shop;