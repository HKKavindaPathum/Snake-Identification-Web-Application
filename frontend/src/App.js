import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Learn } from './Pages/Learn/Learn'; 
import Output from './Pages/Output/Output';
import SnakeInfo from './Components/SnakeInfo/SnakeInfo'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Output' element={<Output />} />
          <Route path='/learn' element={<Learn />} /> 
          <Route path='/snake/:name' element={<SnakeInfo />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
