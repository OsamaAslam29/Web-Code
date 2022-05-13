// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';


function App() {

 
  const [alert, setAlert] = useState(null); // This state is for Alert

  const showAlert =(messgae,type)=>{
    setAlert({
      msg: messgae,
      type: type
    });
    setTimeout(() => {
        setAlert(null)
    },  2000);
  }

  const [mode, setMode] = useState('light'); // This state is for controlind mode
            
        let toggleMode =()=>{
              if(mode==='light'){
                setMode('dark')
                document.body.style.backgroundColor='grey'
                showAlert('Enable Dark Mode','success');
                document.title='TextUtils - Dark Mode';
                setInterval(() => {
                  document.title='TextUtils is Amazing';
                }, 1000);
                setInterval(() => {
                  document.title='Install TextUtils Now';
                }, 1500);
                  }
            else{
              setMode('light')
              document.body.style.backgroundColor='white'
              showAlert('Enable light Mode','success');
              document.title='TextUtils - Light Mode';

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
