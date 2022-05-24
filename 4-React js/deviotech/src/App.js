import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Tutor from './components/Tutor';
import Rating from './components/Rating';
import Yellow from './components/Yellow';
import Card from'./components/Card';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/learning" element={<Yellow />} />
        <Route path="/contact" element={<Footer />} />
  </Routes>


    
    
    </>
  );
}

export default App;
