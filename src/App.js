import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About1 from"./components/about1";
import About from "./components/about";
import About2 from "./components/about2"

import About3 from "./components/about3";
import Update from "./components/update";

function App() {
  const nn = {
    margin: '20px',
    backgroundColor:'#B2B377',
    width:'1100px',
    height:'50px',
    margin:'0px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius:'6px',
    margintop:'4px'
  };
  return (
    <>
      <center>
        <div style={nn}>E-learning</div>
      </center>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about2" element={<About2/>} />
          <Route path="/about3" element={<About3/>} />
          <Route path="/about1" element={<About1/>} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
