import React from 'react'
import Catalogo from './pages/Catalogo';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router';
import DetalhesDePerto from './pages/subPages/DetalhesDePerto';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}>

          </Route>

          <Route path='/catalogo' element={<Catalogo />}>
            <Route path='/catalogo/detalhes' element={<h1>LEONARDOAAAA</h1>} />
          </Route>

        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
