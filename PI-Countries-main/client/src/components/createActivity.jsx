import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { getActivities, postActivities } from './store/reducers/actions';
import {Link} from 'react-router-dom';


const createActivity = () => {
  return (
    <div>estoy creando</div>
  )
}

export default createActivity