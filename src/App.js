import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NavSite from "./components/NavSite";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavSite />
      </div>
    </BrowserRouter>
  );
}

export default App;
