import React from 'react'
import './card.css'
import a from './pics/1.png'
import b from './pics/02.png'
import c from './pics/3.png'
import d from './pics/4.png'

export default function card() {
  return (
   <div className="background_color2">
       <div className="cards">
            <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">Become a Tutor
             </div>
             <div className="text">Discuss with the tutee the amount of time necessary to complete each part of their task.</div>
             <div className="button"><a href="#">Learn more</a></div>
             </div>
            <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">How it Works?
             </div>
             <div className="text">Discuss with the tutee the amount of time necessary to complete each part of their task.</div>
             <div className="button"><a href="#">Learn more</a></div>
             </div>
            <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">Student Resources
             </div>
             <div className="text">Discuss with the tutee the amount of time necessary to complete each part of their task.</div>
             <div className="button"><a href="#">Learn more</a></div>
             </div>
            <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">Find a Tutor
             </div>
             <div className="text">Discuss with the tutee the amount of time necessary to complete each part of their task.</div>
             <div className="button">
                 <a href="#">Learn more</a>
                 </div>
             </div>
             </div>
   </div>
  )
}
