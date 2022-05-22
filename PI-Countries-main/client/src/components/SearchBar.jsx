import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { barSearch } from './store/reducers/actions';
import './harry styles/search.css'

const SearchBar = () => {
    const dispatch= useDispatch();
    const [name,setName] = useState ("");
    let handleOnChange= (e)=>{
        e.preventDefault ()
        setName(e.target.value)
    }
    let handleSubmit= (e) =>{
        e.preventDefault()
        dispatch (barSearch(name))
    }
    
  return (
    <div>
        <input className="inputSearch" placeholder='hola escribi owo...' type="text" onChange={e=>handleOnChange(e)} ></input>
        <button className="buttonSearch" onClick={e=>handleSubmit(e)}>Search</button>
    </div>
  )
}

export default SearchBar