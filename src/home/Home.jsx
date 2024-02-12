import React from 'react'
import Front from './front-Of-home/Front'
import Services from './Services/Services'
import Trusted from './Trusted/Trusted'
import Featured2Product from './featuredProduct/Featured2Product'

function Home() {
  const data={
    Name:"Sun-Shop",
    imgSrc:'front.jpg'
  }
  return (
    <div className='box'>
      <Front Heading={data}/>
      <Featured2Product/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default Home
