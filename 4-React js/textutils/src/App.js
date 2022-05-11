// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode] = useState('light'); 

  let toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
        }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'

        }
  }
  return (
    <>
        <Navbar title="TextUtils" feature="about"  mode={mode} toggleMode={toggleMode}/>

        <div className="container my-3">
               <TextForm heading="This App is Used To Convert The Text :    " mode={mode}/>
       </div>
       <hr />
       <About heading="About Us" />
       <hr />
   </>
  );
}

export default App;
