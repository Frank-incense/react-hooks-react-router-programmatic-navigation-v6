import { NavLink, useOutletContext} from "react-router-dom";
import "./NavBar.css";

function NavBar({context}) {
  
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <button onClick={context}>Logout</button>
    </nav>
  );
}

export default NavBar;
