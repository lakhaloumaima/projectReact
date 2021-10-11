import React from 'react';

const Navbar = () => {
    return ( 
        <div>
        <div>
  {/* Top bar Start */}
  <div className="top-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <i className="fa fa-envelope" />
          lakhalouma6@gmail.com
        </div>
        <div className="col-sm-6">
          <i className="fa fa-phone-alt" />
         +216 24 540 686
        </div>
      </div>
    </div>
  </div>
  {/* Top bar End */}
  {/* Nav Bar Start */}
  <div className="nav">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a href="#" className="navbar-brand">MENU</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
       
                                   
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav mr-auto">
            <a href="/home" className="nav-item nav-link active">Home</a>
            <a href="/products" className="nav-item nav-link">Products</a>
            <a href="/categories" className="nav-item nav-link">Categories</a>
            <a href="/orders" className="nav-item nav-link">Orders</a>
            <a href="/users" className="nav-item nav-link">Users</a>
            <a href="checkouts" className="nav-item nav-link">Checkout</a>
            <a href="clientorders" className="nav-item nav-link">Clientorders</a>
       
          </div>
          <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Login</a>
                <a href="#" className="dropdown-item">Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Nav Bar End */}      
  {/* Bottom Bar Start */}
  <div className="bottom-bar">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-3">
          <div className="logo">
            <a href="index.html">
              <img src="img/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="search">
            <input type="text" placeholder="Search By Name" />
            <button><i className="fa fa-search" /></button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="user">
            
            <a href="cart.html" className="btn cart">
              <i className="fa fa-shopping-cart" />
              <span>(0)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bottom Bar End */}
</div>
  
        </div>
     );
}
 
export default Navbar;