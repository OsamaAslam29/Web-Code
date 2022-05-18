import React from 'react'
import './team.css'
import star from './pics/star.png'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';


export default function Team() {
  return (
    <div className="container">
        <div className="yellow_background_image">
            <div className="team">Meet our Team</div>
           
        </div>
        <div className="bootom_heading">Best in Serivce</div>
   <div className="flex">
        <div className="main_container">
            <div className="penta">
                <img src={star}alt="error" />
            </div>
            <div className="text_title">Steve Carrel <br /><span className='founder'>Founder & Director</span></div>
            <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
            <div className="para">There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</div>
        </div>
        <div className="main_container">
            <div className="penta">
                <img src={star}alt="error" />
            </div>
            <div className="text_title">Linda Karen <br /><span className='founder'>Co-Founder</span></div>
            <div className="icons">
                <div className="socail"><AiOutlineShareAlt className='icon'/></div>
                <div className="socail"><AiOutlineGoogle className='icon'/></div>
                <div className="socail"><AiOutlineTwitter className='icon'/></div>
                <div className="socail"><AiFillYoutube  className='icon'/></div>
            </div>
            <div className="para">There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</div>
        </div>
        </div>

    </div>
    
  )
}
