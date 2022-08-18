import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getDetail } from './store/reducers/actions';
import './harry styles/details.css';

const Details = () => {
  const dispatch= useDispatch();
  const {id}=useParams();
  const countryNew = useSelector(state=>state.detail);
  const activity= useSelector(state=>state.activity);
  console.log(activity,"hola");
  useEffect(()=>{dispatch(getDetail(id))},[dispatch, id]);
  return (
    <div className='detailcss'>
      <h1>{countryNew.id}</h1>
        <h1>
          {countryNew.name}
        </h1>
        <img src={countryNew.flagimg} alt="not found"/>
        <h3>{countryNew.region}</h3>
        <h1>{countryNew.subregion}</h1>
        <h1>capital:{countryNew.capital}</h1>
        <h1>area:{countryNew.area} km2</h1>
        <h1>population:{countryNew.population}</h1>
        <h1>activity:{activity.length ? activity?.map(f=>f.countries.filter(a=>a.name===countryNew.activity)): "none" }</h1>

    </div>
  )
}


export default Details