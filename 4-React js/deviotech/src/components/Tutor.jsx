import React from 'react'
import './tutor.css'
import white from './pics/white.png'
import geometry from './pics/geo.png'
import chemistry from './pics/chem.png'
import phone from './pics/phone.png'
import pencil from './pics/pen.png'

export default function Tutor() {
  return (
    <div className="background_color">
        <div className="white_background">
        <div className="upper_bottom_content">Find A Tutor <br /><span>what do you want to Learn</span></div>
         
        </div>
        
        <div className="cards">
            <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">
                 <img src={geometry} alt="" />
             </div>
             <div className="data">Geomatery</div>
             <div className="bottom_border"></div>
             <div className="bottom_data">14 Tutors</div>
             </div>
        <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">
                 <img src={pencil} alt="" />
             </div>
             <div className="data">Science</div>
             <div className="bottom_border"></div>
             <div className="bottom_data">16 Tutors</div>
             </div>
        <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">
                 <img src={chemistry} alt="" />
             </div>
             <div className="data">Chemistry</div>
             <div className="bottom_border"></div>
             <div className="bottom_data">18 Tutors</div>
             </div>
        <div className="tutor-cards">
             <div className="mini_cards">
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
                 <div className="dot"></div>
             </div>
             <div className="img">
                 <img src={phone} alt="" />
             </div>
             <div className="data">English</div>
             <div className="bottom_border"></div>
             <div className="bottom_data">32 Tutors</div>
             </div>
        </div>
    </div>
  )
}
