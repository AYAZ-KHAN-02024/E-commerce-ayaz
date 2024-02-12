import React from 'react'

function Star({ stars ,reviews}) {
   const ratingStar= Array.from({ length: 5 }, (elem, index) => {

        return (
            <div className='star' key={index}>
                {
                    stars >= index + 1 
                    ? <i className="fa-solid fa-star"></i> 
                    : stars >= index + 0.5 
                    ? <i className="fa-solid fa-star-half-stroke"></i> 
                    : <i className="fa-regular fa-star"></i>
                }
            </div>


        )

    });
return(
    <div className='reviews-star'>
       {ratingStar}
       <p>({reviews} costumer reviews)</p>
      
    </div>
)

}

export default Star
