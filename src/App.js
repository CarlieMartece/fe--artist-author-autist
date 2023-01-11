import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavSite from "./components/NavSite";
import Introduction from "./components/Introduction";
import Code from "./components/Code";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavSite />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
