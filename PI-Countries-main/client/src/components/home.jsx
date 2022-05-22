import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import SearchBar from './SearchBar';
import { getCountries } from './store/reducers/actions';
import './harry styles/home.css'

const Home = () => {
  const countries= useSelector(state=>state.countries);
  const dispatch= useDispatch();
  useEffect (()=>{dispatch(getCountries())}, [dispatch])
  return (
    <div id='homeimage'>
      SOY HOMERO
      <div>
        <nav>
          <SearchBar></SearchBar>
        </nav>
        {countries?.map(c=>{return (
          
          <Link to={"/home/paises/" + c.id}>
            <button id='buttondetail'><h1 id='wordForMore'>CLICK FOR DETAILS</h1>
            <Cards id='details'name={c.name} flagimg={c.flagimg} region={c.region} key={c.id}/>
            </button>
            </Link>
        )})}
      </div>
    </div>
    
  )
}

export default Home