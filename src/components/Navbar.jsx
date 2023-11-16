import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'
import Bank from '../Bank'
import Fotter from './Fotter'
function Navbar() {
  return (
    <div>
    
    <div className='p-4' style={{}}>
      <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <img src="https://www.pngitem.com/pimgs/m/531-5313435_bank-png-free-download-vector-bank-logo-png.png" style={{width:"100px"}} alt="" />
    <a class="navbar-brand" href="#" >
        <h1 className='title fw-bold'>
        Banking Sector Platform
        </h1>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">USER PROFILE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to='/'>
            <a class="nav-link active" aria-current="page" href="#">Home</a>

            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Open Account</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Your Account
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Search Offers</a></li>
              <li><a class="dropdown-item" href="#">Add Statments</a></li>
              <li><a class="dropdown-item" href="#">credits</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Navbar
