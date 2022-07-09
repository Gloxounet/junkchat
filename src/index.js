import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import App from './App';
import PagePseudo from './routes/PagePseudo';
import PageChat from './routes/PageChat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="pseudo" element={<PagePseudo />}/>
        <Route path="chat" element={<PageChat />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

