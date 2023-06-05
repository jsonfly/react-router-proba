import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="Navbar">
        <Link to={'/welcome'}>Welcome</Link>
        <Link to={'/about'}>About</Link>
      </div>
    );
  }
  
  export default Navbar;
  