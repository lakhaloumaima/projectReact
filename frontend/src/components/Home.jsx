import React from 'react';

const Home = () => {
    return ( 
        <div>
        {/* Product List Start */}
<div className="product-view">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-12">
            <div className="product-view-top">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-search">
                    <input type="email" defaultValue="Search Max Price" />
                    <button><i className="fa fa-search" /></button>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-1.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#"><i className="fa fa-cart-plus" /></a>
                  
                </div>
              </div>
              <div className="product-price">
                <h3><span>$</span>99</h3>
                <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
              </div>
            </div>
          </div>



          
         </div>
         
          
        <div className="col-md-12">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Pagination Start */}
      </div>           
      {/* Side Bar Start */}
      <div className="col-lg-4 sidebar">
        <div className="sidebar-widget category">
          <h2 className="title">Category</h2>
          <nav className="navbar bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-female" />Fashion &amp; Beauty</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-child" />Kids &amp; Babies Clothes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-tshirt" />Men &amp; Women Clothes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-mobile-alt" />Gadgets &amp; Accessories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-microchip" />Electronics &amp; Accessories</a>
              </li>
            </ul>
          </nav>
        </div>
       
    
      
      
      </div>
      {/* Side Bar End */}
    </div>
  </div>
</div>
{/* Product List End */}
  
  </div>
     );
}
 
export default Home;