

function FilterReducer(state, action) {
  if (action.type === 'SET_FILTER_PRODUCT') {

    let Price = action.payload.map((val) => { return val.price })
    let newPrice = Price.length > 0 ? (Math.max(...Price)) : ''


    return {
      ...state,
      filter_Product: [...action.payload],
      // here used spread operator because , i want to use only product copy , not real product , and after that real product will not effects by filter product
      all_Product: [...action.payload],
      filters: { ...state.filters, max_price: newPrice, fix_price: newPrice }

    }



  }

  if (action.type === "GET_SORT") {

    return {
      ...state,
      Sorting_value: action.payload,

    }
  }

  if (action.type === 'SORTING_PRODUCT') {
    let newSortData;
    let copyProduct = [...action.payload]
    let afterFilter = state.filter_Product;

    if (state.Sorting_value === "low-high") {
      // this is for ascending order , on base of price so thats why a.price 
      const sortingItems = (a, b) => {
        return a.price - b.price
      }
      newSortData = afterFilter.sort(sortingItems);
    }

    if (state.Sorting_value === "high-low") {
      // this is for descending order , on base of price so thats why a.price 
      const sortingItems = (a, b) => {
        return b.price - a.price
      }
      newSortData = afterFilter.sort(sortingItems);
      //sortingItems have a and b parameter, and they are fetching data like price and stars from copySort
    }

    

    if (state.Sorting_value === "sort" ) {
      newSortData =copyProduct;
     }
    

  return {
      ...state,
      filter_Product: newSortData,
    }
  }



  //  for search bar
  if (action.type === "SEARCH_VALUE") {
    const { name, val } = action.payload;
    
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: val,
        //here, name is key and val is value , for dynamic 
        //  [name]: val, the property name is computed dynamically based on the value of the name variable. When you use name: val, the property name is literally "name" (not computed based on the value of the name variable).

      }

    }
  }

  if (action.type === 'SEARCH_PRODUCT') {
  
    let { all_Product } = state;
    let copyProduct = [...all_Product];

    let { search_bar_value, category, fix_price, company } = state.filters;


    if (search_bar_value) {
      copyProduct = copyProduct.filter((CurEl) => {
        return CurEl.name.toLowerCase().includes(search_bar_value);
      })
    }

    if (category !== 'All') {
      copyProduct = copyProduct.filter((CurEl) => {

        return CurEl.category === category;

      })
    }

    if (company !== 'All') {
      copyProduct = copyProduct.filter((CurEl) => {
        return CurEl.company === company;
      })
    }

    if (fix_price) {
      copyProduct = copyProduct.filter((CurEl) => {

        return CurEl.price <= fix_price

      })
    }

    return {
      ...state,
      filter_Product: copyProduct,
    }

  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        search_bar_value: "",
        category: 'All',
        company: "All",
        max_price: state.filters.max_price,
        fix_price: state.filters.max_price,
        min_price: 0,
      }
    }
  }

  else {
    return state
  }

}

export default FilterReducer
