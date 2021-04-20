import React from 'react'
import {Link} from 'react-router-dom'
import test from 'img/logo.png'

const Header = () => {

    //const reactLogo =('img/logo.png').default -----(<img className="logo" src={test} /)
    return (
    <>
      <header className="page-header">
      <Link to="/"><img className="logo" src={test} /></Link>
        <a href="index.html" ></a>

        {/* <!-- Navigation menu and toggle button (non-functional) --> */}

        <a className="nav-toggle"><i className="fas fa-bars"></i></a>

        <nav aria-label="Primary"  className="navigation">
          <ul className="menu" className="open" >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/*<!-- Search for a product (non-functional) -->*/ }

        <form className="search">
          <input type="search" name="find" className="find" placeholder="Search..." />
          <a className="search-btn"><i className="fas fa-search search-icon"></i></a>
        </form>

        {/*<!-- Additional links --> */}

        <ul className="your-products">
          <li><a href="#"><i className="fas fa-heart"></i></a></li>
          <li><a href="#"><i className="fas fa-cart-plus"></i></a></li>
        </ul>
  
      </header>
          
    </>
  )
}

export default Header