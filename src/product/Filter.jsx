import React, { useState } from 'react'
import { useFilterContext } from '../context/FilterContext'
import './Filter.css'
import PriceFormat from '../priceFormat/PriceFormat'


function Filter() {

  const {
    filters: { max_price, min_price, fix_price },
    updateFilter,
    all_Product,
    ClearFilters,
  } = useFilterContext()

  const categoryData = (data, key) => {
    let newValue = data.map((CurElm) => {
      return CurElm[key];
    })

    return newValue = ['All', ...new Set(newValue)]

  }

  const getUniqueData = categoryData(all_Product, 'category')

  const companyData = (data, key) => {
    let Val = data.map((CurElm) => {
      return CurElm[key]
    })

    Val = ["All", ...new Set(Val)]


    return Val;
  }

  const getUniqueCompany = companyData(all_Product, "company")



  //for add active class
  const [activeButton, setActiveButton] = useState(null);
  const clickHandle = (e) => {

    const clickedValue = e.target.value;
    setActiveButton(clickedValue);

  };

  return (
    <>
      {/* this button for mobile Ui,this will not display in desktop  */}
      <button className='add-filter'
        onClick={(e) => {
          e.stopPropagation();
          let none = document.getElementById("form-none");
          none.style.display = "flex"
        }}>Filter</button>

      <form className='filter-form' id='form-none' action="" onSubmit={(e) => e.preventDefault()}>

        <div className="ct-div">

          {/* this button for mobile Ui,this will not display in desktop  */}
          <button className='cut-filter'
            onClick={() => {
              let done = document.getElementById("form-none");
              done.style.display = "none"
            }}
          >
            <div className="fa-solid fa-circle-xmark"></div>
          </button>



          {/* =====this is for category filter===== */}
          <h3 className='ct-head'>Category</h3>
          {getUniqueData.map((val, ind) => {
            return (
              <button key={ind} className={`ct ${activeButton === val ? "ct-act" : ""}`}
                type='button'
                name='category'
                value={val}
                onClick={(e) => { updateFilter(e), clickHandle(e) }}

              >{val}</button>
            )
          })}


          {/* =====this is for company filter===== */}
          <div className="company_filter price_range">
            <h4 style={{ margin: '5px', textAlign: "center" }}>Select Company</h4>
            <select
              name="company"
              onChange={(e) => updateFilter(e)}
            >
              {getUniqueCompany.map((element, index) => {
                return (
                  <option key={index}>
                    {element}
                  </option>

                )
              })}
            </select>

          </div>



          {/* =====this is for price range filter===== */}
          <div className="price_range">
            <h4>price</h4>
            <p><PriceFormat price={fix_price} /></p>
            <input
              type="range"
              name="fix_price"
              value={fix_price}
              max={max_price}
              min={min_price}
              onChange={(e) => updateFilter(e)}
              id="" />

          </div>


          <div className='price_range'>

            <button className="ct"
              onClick={() => { ClearFilters();
                location.reload();
               }}
            >Clear-Filters</button>
          </div>




        </div>




      </form>
    </>
  )
}

export default Filter
