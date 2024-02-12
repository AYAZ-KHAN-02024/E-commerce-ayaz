import React from 'react'

function SearchBar(props) {
  

  return (
    
    
     <input 
          className='search_bar'
          type="text"
          name='search_bar_value'
          placeholder="🔎SEARCH..."
          value={props.value}
          onChange={props.onChange}
        />

    
   
  )
}

export default SearchBar
