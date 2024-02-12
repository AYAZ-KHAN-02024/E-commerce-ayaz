import React from 'react'
import './Front.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


function Front({ Heading }) {
  const { Name, imgSrc } = Heading
  const { user, isAuthenticated } = useAuth0();


  return (
    <div className='Front'>
      <div className="Front-Text">
        {isAuthenticated && <h3 style={{ color: "black" }}>{user.name}</h3>}
        <h5>welcome to</h5>
        <h1>{Name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque quod sunt sint necessitatibus corrupti facilis sed tenetur nemo ipsam quo alias aliquam incidunt, rerum tempora, aut eos dignissimos provident iusto quidem amet? </p>
        <Link className="NavLink" ><button>shop now</button></Link>
      </div>
      <div className="Front-img">

        <img src={imgSrc} alt="" />
      </div>

    </div>
  )
}

export default Front

