import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { AiOutlineCheck } from "react-icons/ai";
// import FormatPrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // console.log(colorsData)

  return (
    <Container>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search....."
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category filter">
        <h3>Category</h3>
        <div className="btn">
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company filter">
        <h3>Brand</h3>
        <div className="btn">
          {companyOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="company"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-colors filter">
        <h3>Colors</h3>
        <div className="colors">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  // style={{ backgroundColor: curColor }}
                  value={curColor}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                name="color"
                style={{ backgroundColor: curColor }}
                value={curColor}
                onClick={updateFilterValue}
                className={
                  color === curColor ? "color-btn active" : "color-btn"
                }
              >
                {color === curColor ? <AiOutlineCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price filter">
        <h3>Price</h3>
        <p>
          {/* <FormatPrice price={price} /> */}
          {price}
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-button">
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  /* background-color: red; */
  margin-top: 40px;
  .filter-search {
    form {
      input {
        width: 250px;
        border-radius: 10px;
        font-size: 20px;
        text-transform: capitalize;
        border: 1px solid ${({ theme }) => theme.colors.helper};
        &:focus {
          outline: 1.5px solid ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .filter {
    margin-top: 30px;
    h3 {
      font-size: 30px;
      font-weight: 400;
    }
    .btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-top: 10px;
      button {
        border: none;
        background-color: transparent;
        text-transform: capitalize;
        font-size: 20px;
        margin-top: 2px;
        cursor: pointer;
        &:hover {
          text-decoration: underline ${({ theme }) => theme.colors.helper} 1.5px;
        }
      }
    }

    .colors {
      display: flex;
      button {
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
        margin-right: 5px;
        margin-top: 10px;
        background-color: transparent;
        font-size: 25px;
      }
      .color-btn {
        border-radius: 50%;
        font-size: 18px;
        color: #fff;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          opacity: 1;
        }
      }
      .active {
        opacity: 1;
      }
    }
  }

  .filter-price {
    input {
      background: #d3d3d3; /* Grey background */
      outline: none;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }

  .filter-button {
    button {
      margin-top: 20px;
      margin-bottom: 30px;
      background-color: ${({ theme }) => theme.colors.helper};
      color: #fff;
      padding: 15px 20px;
      border-radius: 5px;
      font-size: 23px;
      cursor: pointer;
      font-weight: 400;
      letter-spacing: 1px;
      border: 2px solid #fff;

      &:hover {
        border-color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

 @media (max-width: ${({theme}) => theme.media.mobile}){
  .filter,.filter-button{
    display: none;
  }

  .filter-search form input{
    width: 100%;
  }
 } 

`;
export default FilterSection;
