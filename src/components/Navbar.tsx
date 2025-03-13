// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import ReactLogo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <>
      {/* ------------------------------ top navbar start ------------------------------  */}
      <nav className="navBox">
        <div className="containerNav">
          {/* logo  */}
          <div className="bg-white LogoBox">
            <img className="LogoBoxImg" src={ReactLogo} alt="React Logo" />
          </div>

          {/* nav list  */}
          <div className="navListBox">
            <Link to="/" className="navList">home</Link>
            <Link to="/class" className="navList">classes</Link>
            <Link to="/BecomeATeacher" className="navList">become a teacher</Link>
            <Link to="/aboutUs" className="navList">about us</Link>
            <Link to="/contact" className="navList">contact</Link> {/* Link to ContactUs page */}
            <Link to="/FAQ" className="navList">faq</Link>
            <Link to="/blog" className="navList">blog</Link>
          </div>

          {/* nav btn  */}
          <div className="buttonBox">
            <button className="LoginBtnTop">register</button>
            <button className="RegisterBtn">Login</button>
          </div>

          {/* nav open close btn  */}
          <button className="hidden OpenSide">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </nav>
      {/* ------------------------------ top navbar end ------------------------------  */}
    </>
  );
};