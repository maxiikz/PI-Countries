import React from 'react'
import './harry styles/cardStyle.css'

const Cards = ({
    flagimg,
    name,
    region,
    population

}) => {
  return (
    <div id='card'>
        <h1 id='nameStyle'>{name}</h1>
        <img id='imageflag' src={flagimg} alt="img not found"></img>
        <h1 id='population'> {population}</h1>
        <h3 id='region'>{region}</h3>
    </div>
    
  )
}

export default Cards