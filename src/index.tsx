import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import FourOFour from './screens/404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="modal1" element={<>Hola ahuvando al crij con react router</>}/>ç
      <Route path="*" element={<FourOFour />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


