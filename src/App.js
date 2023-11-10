import './App.css';
import Accueil from './Accueil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Poneys from './Poneys';
import Contact from './Contact'
import Apropos from './Apropos';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/poneys" element={<Poneys />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
