
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './App';



import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Index() {
  return (
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          
        </Routes>
        <ScrollToTop />
      </Router>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
