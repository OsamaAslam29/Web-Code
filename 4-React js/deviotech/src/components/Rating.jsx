import React from 'react'
import './rating.css'
import rat from './pics/rating.png'
import star from './pics/star.png'
import grey from './pics/grey.png'

import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
export default function Rating() {
  return (
      <div className="rating_container"> 
            <div className="rating"> 
                        <div className="head">Our Tutors who Earned <span> 5 star Ratings </span></div>
                        <div className="tail">7 Years of Teaching Experience </div>
                        <img src={rat} alt="" />
             </div>
{/* --------------------------------------------------------------------------------- */}
             <div className="star_panel">
                 <div className="panel1">
                     <div className="image1">
                         <img src={grey} alt="" />
                     </div>
                     <div className="text_heading">Matthew Perry <br /><span>
                         Private online Principles of Finance tutor</span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                 <div className="panel1">
                     <div className="image1">
                         <img src={star} alt="" />
                     </div>
                     <div className="text_heading">Valaria Smith<br /><span>Doctorate in Business Administration </span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                 <div className="panel1">
                     <div className="image1">
                         <img src={grey} alt="" />
                     </div>
                     <div className="text_heading">Jordan Faster<br /><span>MBA, Bachelors in Finance</span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                
                </div>
                <div className="again_flex">
                <div className="panel1">
                     <div className="image1">
                         <img src={grey} alt="" />
                     </div>
                     <div className="text_heading">Sienna Miller<br /><span>M.Ed(TESL) (UM)/ B.Ed, (TESL) (UKM)</span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                 <div className="panel1">
                     <div className="image1">
                         <img src={grey} alt="" />
                     </div>
                     <div className="text_heading">Jacom Mc Hall<br /><span>Bsc.(Hons.) with Petroleum Chemistry</span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                 <div className="panel1">
                     <div className="image1">
                         <img src={grey} alt="" />
                     </div>
                     <div className="text_heading">Jenny Jackson<br /><span>Masters in Education Management </span></div>
                         <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
                 </div>
                 </div>
             </div>
       
     

  )
}
