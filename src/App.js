import './App.css';
import React from 'react';

import InicioPage from './Pages/InicioPage/InicioPage';
import PersonajesPage from './Pages/PersonajesPage/PersonajesPage';
import PersonajesDetallesPage from './Pages/PersonajesDetallesPage/PersonajesDetallesPage';
import CasasPage from './Pages/CasasPage/CasasPage';
import CasasDetallesPage from './Pages/CasasDetallesPage/CasasDetallesPage';
import CronologiaPage from './Pages/CronologiaPage/CronologiaPage';
import { Link, Route, Routes, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      
    <div>
      <Routes>
      <Route path="/" element={<InicioPage></InicioPage>} />
      <Route path="/personajes" element={<PersonajesPage></PersonajesPage>} />
      <Route path="/personajes/:name" element={<PersonajesDetallesPage></PersonajesDetallesPage>} />
      <Route path="/casas" element={<CasasPage></CasasPage>} />
      <Route path="/casas/:name" element={<CasasDetallesPage></CasasDetallesPage>} />
      <Route path="/cronologia" element={<CronologiaPage></CronologiaPage>} />
      </Routes>

    </div>


    <footer>
        <nav>

          <div><Link to="/personajes"><h1>PERSONAJES</h1></Link></div>
          <div><Link to="/casas"><h1>CASAS</h1></Link></div>
          <div><Link to="/cronologia"><h1>CRONOLOGIA</h1></Link></div>
        </nav>
    </footer>
    

    </Router>
  );
}

export default App;
