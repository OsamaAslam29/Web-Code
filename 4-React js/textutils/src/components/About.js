import React,{useState} from 'react'

export default function About(props) {
    

   const [myStlye, setMyStlye] = useState(  {
    color:"black",
    backgroundColor:"white"
    } );

    const [btntext, setBtnText] = useState('Enable Dark Mode')

        const toggleWord =()=>{
            if(myStlye.color==='white'){
                setMyStlye(
                    {
                        color:"black",
                        backgroundColor:"white",
                       
                    } );
                        setBtnText("Enable Dark Mode")     
                    }
                    else{
                        setMyStlye(
                            {
                                color:"white",
                                backgroundColor:"grey",
                                border:'1px solid white'
                        } );
                        setBtnText("Enable Light Mode")
            }
        }
 
    
  return (

    <div className='container'>
            <h1>{props.heading}</h1>
        <div className="accordion" id="accordionExample" style={myStlye}>
        <div className="accordion-item" style={myStlye}>
        <h2 className="accordion-header" id="headingOne" style={myStlye}>
        <button className="accordion-button" style={myStlye} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStlye}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStlye}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"style={myStlye}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStlye}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item"style={myStlye}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed"style={myStlye} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStlye}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
  </div>
  <div className="container">
      <button onClick={toggleWord} className="btn btn-primary mx-3 my-3">{btntext} </button>
  </div>

        {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div> */}
</div>
    </div>
  )
}
