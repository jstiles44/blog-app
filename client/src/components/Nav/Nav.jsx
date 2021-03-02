import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">OreganoBook</h1>
      <div className="links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/new">
          Add Item
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
