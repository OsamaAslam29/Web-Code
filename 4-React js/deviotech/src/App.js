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

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Team/>
    <Tutor/>
    <Rating/>
    <Yellow/>
    <Card/> 
    <Footer/>
    </>
  );
}

export default App;
