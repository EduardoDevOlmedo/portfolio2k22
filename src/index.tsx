import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import FourOFour from './screens/404';
import { projectConfigs } from './projects/projectConfigs';
import ElementScreen from './screens/ElementScreen';

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
      {
        projectConfigs.map(el => {
          return (
            <Route key={el.title} path={`/projects/${el.url}`} element={
              <ElementScreen {...el} />
            }
            />
          )
        })
      }
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


