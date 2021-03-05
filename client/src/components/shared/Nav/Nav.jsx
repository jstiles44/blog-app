import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth)
  

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow)
  })
  return (
    <nav className="nav">
      <div className="logo-container">
      <img className="kiwi" src="https://i.ibb.co/cL8wtdc/kiwi-slice.png" alt-text="kiwi" />
        <div className="logo">LymeWyre Reviews</div>
        </div>
      <div className="links">
        
        <NavLink className="link" to="/">
          {width > 560 ? "Home":"🏠"}
        </NavLink>
        
        
        <NavLink className="link" to="/new">
          {width > 560 ? "Add Review":"➕"}
          </NavLink>
          
      </div>
    </nav>
  );
};

export default Nav;
