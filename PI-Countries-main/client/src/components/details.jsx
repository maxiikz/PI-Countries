import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getDetail } from './store/reducers/actions';

const Details = () => {
  const dispatch= useDispatch();
  const {id}=useParams();
  const countryNew = useSelector(state=>state.detail);
  useEffect(()=>{dispatch(getDetail(id))},[dispatch, id]);
  return (
    <div>
      <h1>{countryNew.id}</h1>
        <h1>
          {countryNew.name}
        </h1>
        <img src={countryNew.flagimg}/>
        <h3>{countryNew.region}</h3>
        <h1>{countryNew.subregion}</h1>
        <h1>{countryNew.capital}</h1>
        <h1>area:{countryNew.area} km2</h1>
        <h1>{countryNew.population}</h1>

    </div>
  )
}

export default Details