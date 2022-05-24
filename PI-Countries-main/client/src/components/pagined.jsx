import React from 'react'


export default function Pagined ({countries, countryPage, pagCountries})  {
  const pagNumb=[];
  for(let i=1; i<=Math.ceil(countries/countryPage);i++){
      pagNumb.push(i);
  }
  return   (
   <nav>
       <ul>
           {pagNumb && pagNumb.map(number=><button key={number} onClick={()=>pagCountries(number)}>{number}</button>)}
       </ul>
   </nav>
  )
}
