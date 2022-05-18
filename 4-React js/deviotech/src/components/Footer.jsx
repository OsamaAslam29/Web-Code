import React from 'react'
import moduleName from './footer.css'
import jd from './pics/jd.png'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';


export default function Footer() {
  return (
    <>

    <div className="footer">
        <div className="section">
            <img src={jd}alt="" />
            <div className="f_para">Discuss with the tutee the amount of time necessary to complete each part of their task.</div>
        </div>
        <div className="section">
            <div className="title">Useful Links</div>
            <div className="flex_para">
                <li>Free Consultation</li>
                <li> Visit Us</li>
                <li> Chat with us</li>
            </div>
        </div>
       
        <div className="section">
            <div className="title">Contact</div>
            <div className="flex_para">
                <li>Free Consultation</li>
                <li> Visit Us</li>
                <li> Chat with us</li>
            </div>
        </div>
       
        <div className="section">
            <div className="title">Follow Us</div>
                <div className="flex_para">
                  <div className="icons">
                    <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                    <div className="socail"><AiOutlineGoogle className='icon'/></div>
                    <div className="socail"><AiOutlineTwitter className='icon'/></div>
                    <div className="socail"><AiFillYoutube  className='icon'/></div>
                </div>
                  </div>
                     </div>
                        </div>
                        <div className="borde">
                     <div className="dash_border"></div>
                     </div>
                     <div className="copy">
                         <div className="content1">
                             <div className="right">Copyright © 2021. Osama Aslam</div>
                             <div className="issue">Terms | Privacy Policy</div>
                         </div>
                     </div>
                     </>  
                     )
}
