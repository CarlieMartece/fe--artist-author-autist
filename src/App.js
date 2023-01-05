import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img
          alt="CM-redblackwhite-hex-logo"
          src={require("./images/layout/logo-CM-141.png")}
        />
      </Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
