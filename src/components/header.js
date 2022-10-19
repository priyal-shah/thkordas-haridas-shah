import React, { useState, useEffect } from "react";
import HomePage from './HomePage.js';
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <>
      {/* sign up modal */}
                  {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup_modal">
              Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="signup_modal" tabindex="-1" aria-labelledby="signup_modalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sign UP</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form className="container signin_modal signup_modal">
                    <div className="row">
                      <div className="col-12  row">
                        <label className="col-12">User Id/Email Id 🔒 </label>
                        <input className="col-12" type="email" placeholder="user id or email" required title="ex: xyz@gmail.com"/>
                      </div>
                      <div className="col-12 row">
                        <label className="col-12">Password 🔑 </label>
                        <input type="password" placeholder="your password" title="password should contain at least one capital letter, small letter, one digit and one special symbol"/>
                      </div>
                    </div>
                  </form>
                  <div className="col-10 offset-1 m-3">Already has an account?<a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal"> Sign In</a></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"><Link to="/infopage" className="signupbtn">Sign Up</Link></button>
                  </div>
                </div>
              </div>
            </div>


      {/* sign in modal */}
               

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                  <form className="container signin_modal">
                    <div className="row">
                      <div className="col-12  row">
                        <label className="col-12">User Id/Email Id 🔒 </label>
                        <input className="col-12" type="email" placeholder="user id or email" required/>
                      </div>
                      <div className="col-12 row">
                        <label className="col-12">Password 🔑 </label>
                        <input type="password" placeholder="your password" className="password"/>
                      </div>
                    </div>
                  </form>
                  <div className="col-10 offset-1 m-3">New User?<a href="#"  data-bs-toggle="modal" data-bs-target="#signup_modal"> Sign Up</a></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Sign In</button>
                </div>
              </div>
            </div>
          </div>


      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">

          {/* toggle button */}
          <button
            className="navbar-toggler col-1 mr-auto p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* shope name */}
		      <Link className="navbar-brand col-lg-3 col-9" to="/">
           <strong> Thakordas Haridas Shah</strong>
          </Link>

          {/* your address */}
          <div className="col-lg-1 col-8  offset-4 mb-2 mt-2 offset-lg-0 mb-lg-0 mt-lg-0"><Link to="/infopage" >
          <i className="bi bi-geo-alt-fill locationIcon "></i>
           <span className="locationSpan"> Your address</span>
          </Link></div>


          {/* serch bar */}
          <form className="d-flex col-lg-3 col-9 form"> 
            <div className="formDiv row">
              <input
                className="form-control me-2 col-10"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light col-2" type="submit">
              <i class="bi bi-search"></i>
              </button>
              </div>
            </form>


            {/* navebar collapse */}
          <div className="collapse navbar-collapse col-lg-3 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 row">
                {/* dropdown */}
              <li className="nav-item dropdown col-lg-3 m-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign in
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <a className="dropdown-item btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    
                      Sign In/Sgin Up
                    </a>
                    <hr/>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <i className="bi bi-person-square"></i>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <i className="bi bi-cart-check-fill"></i>
                      My orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <i className="bi bi-list-ul"></i>
                      WishList
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#contact">
                    <i className="bi bi-person-lines-fill"></i>
                      Contact Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#directions">
                    <i className="bi bi-pin-map-fill"></i>
                      Directions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={HomePage}>
                      Give feedback
                    </a>
                  </li>
                </ul>
              </li>
              {/* dropdown end */}
              {/* home page */}
              {/* <li className="nav-item  col-md-3">
                <a className="row">
                  <i className="bi bi-house-fill col-md-3"></i>
                  <span className="col-md-6">Home</span>
                </a>
              </li> */}



              <li className="nav-item  col-lg-3 m-2">
                <Link
                  className="nav-link  "
                  to="/aboutus"
                >
                  <span >AboutUs</span>
                </Link>
              </li>
              


                {/* shop now */}
              <li className="nav-item dropdown col-lg-3 m-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop Now  
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* category list */}
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>



          </div>
          {/* collapse end */}


           {/* cart icon */}

           <div className="col-lg-1 col-3"><a href="#" className="cartA">
           <i className="bi bi-cart4 cartIcon"></i><span className="cartSpan">0</span>
          </a></div>

        {/* signin only for smaller screen size

        <div className="col-3 offset-5 mt-1"><a href="#" className="HiddenSignIn" >
           Sign in
          </a></div>  
         */}
        </div>
      </nav>
      {/* our address */}
      <div className="col-12 OurAddressDiv">
           <a  className="OurAddress">
           <i className="bi bi-geo-alt-fill "></i><span>Our Address:<strong> Thakordas Haridas Shah Matapur Bazar Nepanagar(M.P.) India</strong></span>
          </a></div>
     
    </>
  );
}

export default Header;
