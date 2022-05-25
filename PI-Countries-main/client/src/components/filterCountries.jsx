import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByActivity, getActivities, getCountries, orderByName, orderByPop, orderByReg } from './store/reducers/actions';
import './harry styles/filter.css'


const FilterCountries = ({setCurrentPage, setOrder}) => {
  const dispatch=useDispatch();
  const activities=useSelector(state=>state.activity)
  useEffect(()=>{
      dispatch (getActivities());
      dispatch (getCountries());
       },[dispatch]);
       const handleReset=(e)=>{ //resetear todos los filtros
           e.preventDefault();
           dispatch(getCountries());
       }
      const handleName= (e)=>{
          e.preventDefault();//ordena los nombres
        
          dispatch(orderByName(e.target.value));
            setCurrentPage(1);
            setOrder(e.target.value);
         
      }
      const handleReg=(e)=>{
          e.preventDefault();
          dispatch(orderByReg(e.target.value))
      }
      const handleActivity= (e)=>{
          e.preventDefault();
          setCurrentPage(1);
          dispatch(filterByActivity(e.target.value))
      }
      const handlePop= (e)=>{
        e.preventDefault();//ordena los nombres
        setCurrentPage(1);
        
        dispatch(orderByPop(e.target.value))
    }
  return (
    <div>
        <button onClick={(e)=>handleReset(e)}>reset</button>
        <label className='pepe'>sort by name
            <select onChange={(e)=>handleName(e)}>
                <option value="">-</option>
                <option value="A Z">A Z</option>
                <option value="Z A">Z A</option>
                
                </select>
        </label>
        <label className='pepe'>sort by population
            <select onChange={(e)=>handlePop(e)}>
                
                <option value="">-</option>
                <option value="low high">low high</option>
                <option value="high low">high low</option>
                
                </select>
        </label>
        <label className='pepe'>sort by region
            <select onChange={(e)=>handleReg(e)}>
                <option value="ALL">-</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                
                </select>
        </label>
        <label>
            <select onChange={(e)=>handleActivity(e)}>
                <option value="All">-</option>
                 {activities?.map(el=>(
                     <option value={el.name}>
                         {el.name}

                     </option>
                 ))}

            </select>
        </label>
    </div>
  )
}

export default FilterCountries