import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../componentes/header/header';
import AgregaTarea from '../componentes/agregaTarea';


const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<AgregaTarea />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;