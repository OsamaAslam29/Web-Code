// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
        <Navbar title="TextUtils" feature="about"/>

        <div className="container my-3">
               <TextForm heading="This App is Used To Convert The Text :    "/>
       </div>
       <hr />
       <About heading="About Us"/>
       <hr />
   </>
  );
}

export default App;
