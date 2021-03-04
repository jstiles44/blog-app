import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
      <img className="kiwi" src="https://i.ibb.co/cL8wtdc/kiwi-slice.png" alt-text="kiwi" />
        <div className="logo">LymeWyre Music Reviews</div>
        </div>
      <div className="links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/new">
          Add Review
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
