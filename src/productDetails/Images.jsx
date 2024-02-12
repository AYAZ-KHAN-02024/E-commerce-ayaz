import React, { useState } from 'react'

 function Images({ imgs=[{url:''}]  }) {
    const [mainImg,setMainImg]=useState( 0 )
  
  return (
    <div className='imgs'>
     <div className="main-img">
        <img src={ imgs[mainImg].url}  />
      </div>
       
       
       <div className='row-img-main'>{imgs &&
            imgs.map((val,ind)=>{
                return(
                    <div className="row-img" key={ind}> 
                        <img src={val.url} alt={val.filename}
                         onClick={()=>setMainImg(ind)}
                         />
                    </div>
                )
            })
        }</div>
     
     
    </div>
  )
}

export default Images
