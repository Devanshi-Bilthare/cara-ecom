import React from 'react';
import styled from 'styled-components';
import {feature} from '../Data/feature'

const Features = () => {
  
    return (
      <Container>
        {feature.map((item) =>{
          return(
            <div className="fe-box">
             <img src={item.image} alt="" />
             <h6 className={item.class}>{item.text}</h6>
           </div>
          )
           
           })}
      </Container>
    )

  
}

export default Features

const Container = styled.div`
padding:60px 80px;
/* background-color: ${({ theme}) => theme.colors.bg}; */
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
.fe-box{
    width: 220px;
    text-align: center;
    padding: 35px 20px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
    border: 1px solid #cce7d0;
    border-radius: 4px;
    margin: 15px 0;

    &:hover{
      box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
    }

    img{
      width: 100%;
      margin-bottom: 15px;
    }

    h6{
      display: inline-block;
      padding: 9px 8px 6px 8px;
      line-height: 1;
      border-radius: 4px;
      color: #088178;
      font-size: 18px;
    }
}
.pink{
  background-color: #fddde4;  
}
.green{
  background-color: #cdebbc;
}
.blue{
  background-color: #d1e8f2;
}
.dark-blue{
  background-color: #cdd4f8;
}
.purple{
background-color: #f6dbf6;
}
`