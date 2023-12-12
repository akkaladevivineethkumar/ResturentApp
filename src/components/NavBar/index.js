import {IoCartOutline} from 'react-icons/io5'
import React, {useState, useContext} from 'react'
import AppContext from '../../context/AppContext'
import './index.css'

const NavBar = props => {
  const {name} = props
  const {cart} = useContext(AppContext)
  console.log(cart)
  return (
    <nav className="nav">
      <div className="navContainer1">
        <h1 className="restoCafe">{name}</h1>
        <div className="navContainer2">
          <h1 className="myOrders">My Orders</h1>
          <IoCartOutline size="36" color="#363532" />
          <div className="cart">
            <p>{cart.length}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
