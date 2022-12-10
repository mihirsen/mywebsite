import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
const Services = () => {
  return (
    <div className='Services' id='Services'>
        <div className='awesome'> 
        
          <span>My Awesome</span>
          <span>services</span>
          <span>
          I am a hard-working and driven individual who isn't afraid to face a challenge.I'm passionate about my work and I know how to get the job done. <br />  I would describe myself as an open and honest person who doesn't believe <br /> in misleading other people and tries to be fair in everything I do.
          </span>
          <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
          </a>
          <div  className='blur s-blur' style={{background : '#ABF1FF94'}}></div>

        </div>
        <div className='cards'>
            <div  style={{left:'14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Good at re-creation"}
                />
            </div>

            <div  style={{top:"12rem" , left:"-4rem"}}>
                <Card 
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"Frontend"}
                />
            </div>
             
            <div  style={{top:"19rem" , left:"12rem"}}>
                <Card 
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {" Yes, I can make it.. "}
                />
            </div>

        </div>
    </div>
  )
}

export default Services