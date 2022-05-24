import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import SearchBar from './SearchBar';
import { getCountries } from './store/reducers/actions';
import './harry styles/home.css'
import Pagined from './Pagined';
import FilterCountries from './FilterCountries';

const Home = () => {
  const countries= useSelector(state=>state.countries);
  const dispatch= useDispatch();
  const [currentPage, setCurrentPage]= useState(1);
  const [countryPage, setCountryPage]= useState(10);
  const indexOfLastCountries= currentPage*countryPage;
  const indexOfFirstCountry= indexOfLastCountries - countryPage;
  const currentCountries= countries?.slice(indexOfFirstCountry, indexOfLastCountries);
  const pagCountries= (pagNumb)=>{
    setCurrentPage(pagNumb)
  };
  useEffect (()=>{dispatch(getCountries())}, [dispatch])
  return (
    <div id='homeimage'>
      SOY HOMERO
      <div>
        <nav>
          <FilterCountries
          setCurrentPage={setCurrentPage}
          ></FilterCountries>
          <SearchBar></SearchBar>
        </nav>
        {countries && currentCountries?.map(c=>{return (
          
          <Link to={"/home/paises/" + c.id}>
            <button id='buttondetail'><div id='wordForMore'><h1>CLICK FOR DETAILS</h1></div>
            <Cards id='details'name={c.name} flagimg={c.flagimg} region={c.region} key={c.id}/>
            </button>
            </Link>
        )})}
      </div>
      <Pagined countryPage={countryPage} countries={countries.length} pagCountries={pagCountries}>

      </Pagined>
    </div>
    
  )
}

export default Home