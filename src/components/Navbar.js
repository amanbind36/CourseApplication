import React from 'react'
import Styles from './navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={Styles.container}>
        <Link to='/' style={{textDecoration:"none",color:"white"}}>
        <h1>Course Management App</h1>
        </Link>
        <Link to='/' style={{textDecoration:"none",color:"white"}}>
        <h1>Home</h1>
        </Link>
        <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>
          
        <h1>Dashboard</h1>
        </Link>

      
    </div>
  )
}

export default Navbar