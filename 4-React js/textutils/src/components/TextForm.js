import React, {useState} from 'react'

export default function TextForm(props) {

  
  const handleUpText =()=> {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  
  const handleOnChange =(event)=> {
    setText(event.target.value)
    
  }
  const [text, setText] = useState('Enter your text');  
    // text="osama"; worng way
    // setText("This is right way");
  return (
    <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox"  rows="10"></textarea>
          </div>
          <div className="btn btn-primary" onClick={handleUpText}> Convert to uppercase</div>

    </div>
  )
}
