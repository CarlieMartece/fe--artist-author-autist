import { Link } from "react-router-dom";
import "../styles/navigation.css";


export default function Header () {
    return (
      <div id="Header">
        <Logo />
        <NavBar />
      </div>
    );
};


const Logo = () => {
  return (
    <div id="Logo">
      <Link to="/">
        <img
          alt="CM-redblackwhite-hex-logo"
          src={require("../images/layout/logo-CM-141.png")}
        />
      </Link>
    </div>
  )
}


const NavBar = () => {
  return (
    <div id="NavBar">
      <NavSocial />
    </div>
  );
}


const NavSocial = () => {
  return (
    <nav className="nav-section">
      <div className="hexagon"><span>&#x2B22;</span></div>
    </nav>
  );
}