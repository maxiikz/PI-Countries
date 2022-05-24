import React from 'react'


const Pagined = ({countries, countryPage, pagCountries}) => {
  let pagNumb=[];
  for(let i=1; i<=Math.ceil(countries/countryPage);i++){
      pagNumb.push(i);
  }
  return   (
   <nav>
       <ul>
           {pagNumb && pagNumb.map(number=><a key={number} onClick={()=>pagCountries(number)}>{number}</a>)}
       </ul>
   </nav>
  )
}

export default Pagined