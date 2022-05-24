import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries, orderByName, orderByPop } from './store/reducers/actions';

const FilterCountries = ({setCurrentPage}) => {
  const dispatch=useDispatch();
  useEffect(()=>{
      //dispatch (getActivity());
      dispatch (getCountries());
       },[dispatch]);
       const handleReset=(e)=>{ //resetear todos los filtros
           e.preventDefault();
           dispatch(getCountries());
       }
      const handleName= (e)=>{
          e.preventDefault();//ordena los nombres
          setCurrentPage(1);
          dispatch(orderByName(e.target.value))
      }
      const handlePop= (e)=>{
        e.preventDefault();//ordena los populstion
        setCurrentPage(1);
        dispatch(orderByPop(e.target.value))
    }
  return (
    <div>
        <button onClick={(e)=>handleReset(e)}>reset</button>
        <label>sort by name
            <select onChange={(e)=>handleName(e)}>
                <option value="">-</option>
                <option value="A Z">A Z</option>
                <option value="Z A">Z A</option>
                
                </select>
        </label>
        <label>sort by population
            <select onChange={(e)=>handlePop(e)}>
                
                <option value="">-</option>
                <option value="low high">low high</option>
                <option value="high low">high low</option>
                
                </select>
        </label>
        <label>sort by region
            <select>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                
                </select>
        </label>
    </div>
  )
}

export default FilterCountries