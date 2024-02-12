import React from 'react'
import Front from '../home/front-Of-home/Front'


function About() {
 const data={
  Name:'Sun-Shop E-commerce',
  imgSrc:"about.jpg"
 }
  return (
    <div className='box'>
   <Front Heading={data}/>
    </div>
  )
}

export default About
