import React, {useState} from 'react'

export default function TextForm(props) {

  
  const handleUpText =()=> {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLoText =()=> {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  }
  
  const handleOnChange =(event)=> {
    setText(event.target.value)
    
  }
  const [text, setText] = useState('Enter your text');  
    // text="osama"; worng way
    // setText("This is right way");
  return (
    <>
    <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox"  rows="10"></textarea>
          </div>
          <div className="btn btn-primary mx-3" onClick={handleUpText}> Convert to UpperCase</div>
          <div className="btn btn-primary mx-3" onClick={handleLoText}> Convert to LowerCase</div>

    </div>
    <div className="container my-3">
      <h2>Words and Character Counter</h2>
             <p>  {  text.split(" ").length}  Words And {text.length} Character </p>
             <p>  { 0.008 * text.split(" ").length } Time Required to read </p>

      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
