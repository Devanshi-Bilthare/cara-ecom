import React from 'react'
import styled from 'styled-components'
import {BsFillGrid3X3GapFill, BsCardList} from 'react-icons/bs'
import { useFilterContext } from '../context/filterContext'

const Sort = () => {
  const {filter_products,setGridView,setListView,sorting} = useFilterContext();
  return (
   <Container>
        <div className="sort-btn">
          <button onClick={setGridView}><BsFillGrid3X3GapFill /></button>
          <button onClick={setListView}><BsCardList /></button>
        </div>
        <div className="sort-data">
          <p>{`${filter_products.length} Products Availble`}</p>
        </div>
        <div className="dropdown">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className='sort-selection' onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
   </Container>
  )
}


const Container = styled.div`
/* width: ; */
display: flex;
justify-content: space-between;
margin-top: 40px;

.sort-btn button{
  border: none;
  background-color: transparent;
  margin-right: 15px;
  cursor: pointer;
}

.sort-selection{
  padding: 10px;
  font-size: 20px;
  outline: 1px solid ${({theme}) => theme.colors.helper};
}

@media (max-width: ${({theme}) => theme.media.mobile}){
  .sort-data{
    p{
      font-size: 20px;
    }
  }
}

`;
export default Sort