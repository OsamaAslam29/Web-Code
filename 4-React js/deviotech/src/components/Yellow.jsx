import React from 'react'
import './yellow.css'
import brush from './pics/yellow.png'
import first from './pics/card1.png'
import second from './pics/card2.png'
export default function Yellow() {
  return (
      <>    
        <div className="yellow_background"></div>
        <div className="yellow_brush">
            <div className="brush">
                <img src= {brush} alt="" />
            </div>
            <div className="brush_content">Learning is Fun with JD</div>
            <div className="brush_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos aliquam, dignissimos placeat perferendis minima voluptate minus quaerat repellat eligendi laudantium error, provident, ea deleniti sunt maiores odio! Illum ex vero minus. Consequuntur quia id similique rerum ipsa adipisci ad, deleniti vel! Eos nobis, voluptates error dolorum natus praesentium atque.</div>
        </div>
        <div className="brush_card">
            <div className="first_card">
                <img src={first} alt="" />
                <div className="brush_heading">Certifications <br /><span>Get Globally Recognized Certifications</span>
                <div className="yellow_border"></div>
                <div className="yellow_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?</div>
                <div className="more">Know More</div>
                </div>
            </div>
            <div className="first_card">
                <img src={second} alt="" />
                <div className="brush_heading">Technical Training<br /><span>Systematic Training</span>
                <div className="yellow_border"></div>
                <div className="yellow_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?</div>
                <div className="more">Know More</div>
                </div>
            </div>
        </div>
    

    </>

  )
}
