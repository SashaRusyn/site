import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Registration from './Registration';
import Sign from './Sign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Sign" element={<Sign />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
