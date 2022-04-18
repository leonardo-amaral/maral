import React from 'react'
import { Link } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/catalogo' element={<Catalogo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
