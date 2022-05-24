import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./harry styles/styles.module.css"

const landing = () => {
  return (
    <div className={styles.principal}>
      <div >
      <button className={styles.btnlanding}><Link to='/home' >HOLA</Link></button>
   
      </div>
      <div className={styles.textPresentation}>HOLA ESTE ES MI PROYECTO QUE FELIZ QUE ESTOY, CLICK EN HOLA!</div>
      
    </div>
  )
}

export default landing