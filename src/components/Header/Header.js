// Header.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from '../../assets/images/Logo1.svg'
import Logo2 from '../../assets/images/Logo2.png'
import Menu from '../../assets/images/Group 9.png'
import Search from '../../assets/images/Path 4.svg'
import './Header.css';

const Header = () => {

  const scrollToAbout = () => {
    const whatwedoSection = document.getElementById("whatwedo");
    if (whatwedoSection) {
      whatwedoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToExpertis = () => {
    const ToExpertisSection = document.getElementById("ToExpertisSection");
    if (ToExpertisSection) {
      ToExpertisSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCompany = () => {
    const companySection = document.getElementById("company");
    if (companySection) {
      companySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSayToHello = () => {
    const SayToHelloSection = document.getElementById("SayToHello");
    if (SayToHelloSection) {
      SayToHelloSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className='header-section'>
          <header className="main-header">
      <nav className="navbar navbar-expand-lg navpaddig-class">
        <div className="container">
          <a className="navbar-brand" href="#">
           <div className='logo-div'>
            <img src={Logo1} className='img-fluid'/>
            <img src={Logo2} className='img-fluid mt-3'/>
           </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon mt-2">
                <img src={Menu}/>
            </span>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> <div className='logo-div'>
            <img src={Logo1} className='img-fluid'/>
            <img src={Logo2} className='img-fluid mt-3'/>
           </div></h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#whatwedo" >HOME</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/#whatwedo" onClick={scrollToAbout} id="whatWeDoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    WHAT WE DO
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="whatWeDoDropdown">
                    <li><a className="dropdown-item" href="#">Service 1</a></li>
                    <li><a className="dropdown-item" href="#">Service 2</a></li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#ToExpertisSection" onClick={scrollToExpertis}>HIRE EXPERTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#company" onClick={scrollToCompany}>COMPANY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#SayToHello" onClick={scrollToSayToHello}>SAY HELLO!</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Show the following div for larger screens */}
          <div className="navbar-nav d-none d-lg-flex">
            <a className="nav-link" href="#">HOME</a>
            
            <a className="nav-link dropdown-toggle" href="/#whatwedo" onClick={scrollToAbout} id="whatWeDoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              WHAT WE DO
            </a>
           
            <div className="dropdown-menu" aria-labelledby="whatWeDoDropdown">
              <a className="dropdown-item" href="#">Service 1</a>
              <a className="dropdown-item" href="#">Service 2</a>
            
            </div>
         
            <a className="nav-link dropdown-toggle"  href="/#ToExpertisSection" onClick={scrollToExpertis} role="button" data-bs-toggle="dropdown" aria-expanded="false">HIRE EXPERTS</a>
            <div className="dropdown-menu" aria-labelledby="HIREEXPERTS">
              <a className="dropdown-item" href="#">Service 1</a>
              <a className="dropdown-item" href="#">Service 2</a>
            
            </div>
            <a className="nav-link" href="/#company" onClick={scrollToCompany}>COMPANY</a>
            <a className="nav-link" href="/#SayToHello" onClick={scrollToSayToHello}>SAY HELLO!</a>
        
            <div className=''>
                <img src={Search} className='serch-icon'></img>
            </div>
            <div>
            <img src={Menu}  className='menu-icon'></img>
            </div>
            {/* Add more navigation items as needed */}
          </div>
        </div>
        
      </nav>
    </header>
    </section>
  
  );
};

export default Header;