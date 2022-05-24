import React from 'react'
import '../service/service.css'
import { BiCast } from 'react-icons/bi';

export default function Service() {
  return (
    <div className="flex">
        <div className="service_cards">
                <div className="card">
                    <div className="icon"><BiCast/></div>
                    <div className="card_content">Business Stratagy</div>
                    <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
                </div>

                <div className="card">
                    <div className="icon"><BiCast/></div>
                    <div className="card_content">Website Deveopment</div>
                    <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
                </div>

                <div className="card">
                    <div className="icon"><BiCast/></div>
                    <div className="card_content">Marketing &amp; Reporting</div>
                    <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
                </div>
        </div>
        
    <div className="service_cards">
        <div className="card">
            <div className="icon"><BiCast/></div>
            <div className="card_content">Mobile App Development</div>
            <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
        </div>

        <div className="card">
            <div className="icon"><BiCast/></div>
            <div className="card_content">Marketing &amp; Reporting</div>
            <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
        </div>

        <div className="card">
            <div className="icon"><BiCast/></div>
            <div className="card_content">Business Stratagy</div>
            <p className="card_para">I throw myself down among the <br /> tall grass by the stream as I lie <br /> close to the earth.</p>
        </div>
        
    </div>
    
    </div>
  )
}
