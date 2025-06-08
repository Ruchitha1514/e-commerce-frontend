import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
        <header className="header">
            <a href="/" className="logo">🛒 QuickShop</a>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </nav>
        </header>
  )
}

export default Navbar 
