import React from 'react';
import {AiOutlineStar ,AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import styled from 'styled-components';

const Star = ({stars}) => {

    const ratingStar = Array.from({length:5},(elem, index) => {
        let number = index + 0.5;

        return(
            <span key={index}>
                {
                    stars >= index + 1
                     ? (<AiFillStar className='icon' />)
                     : stars >= number 
                     ? (<BsStarHalf className='icon'/>) 
                     : (<AiOutlineStar className='icon'/>)
                }
            </span>
        )
    })

  return (
   <Container>
    <div className="icon-style">
        {ratingStar}
    </div>
   </Container>
  )
}

const Container = styled.div`
.icon{
    font-size: 22px;
    margin-top: 20px;
    color: #FF9529;
    margin-right: 2px;
}
`;

export default Star