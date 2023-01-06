import { Link } from "react-router-dom";
import "../styles/navigation.css";
import NavSocial from "./NavSocial";

export default function Header() {
  return (
    <div id="Header">
      <Logo />
      <NavBar />
    </div>
  );
}

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
  );
};

const NavBar = () => {
  return (
    <div id="NavBar">
      <NavSocial />
    </div>
  );
};


