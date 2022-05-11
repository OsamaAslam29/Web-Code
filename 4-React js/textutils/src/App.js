// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null); 

  const showAlert =(messgae,type)=>{
    setAlert({
      msg: messgae,
      type: type
    });
    setTimeout(() => {
        setAlert(null)
    }, 2000);
  }

  let toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Enable Dark Mode','success')
        }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Enable light Mode','success')


        }
  }
  return (
    <>
        <Navbar title="TextUtils" feature="about"  mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <div className="container my-3">
            <TextForm showAlert={showAlert} heading="This App is Used To Convert The Text :    " mode={mode}/>
       </div>
                 <hr />
       <About heading="About Us" />
       <hr />
   </>
  );
}

export default App;
