import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavSite from "./components/NavSite";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavSite />
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
