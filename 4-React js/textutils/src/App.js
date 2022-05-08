// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
        <Navbar title="TextUtils" feature="about"/>

        <div className="container my-3">
               <TextForm heading="This App is Used to Convert the text into uppercase"/>
       </div>
   </>
  );
}

export default App;
