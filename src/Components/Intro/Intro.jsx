import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/Floating';

const Intro = () => {


  return (
    <div className="intro">
       <div className="i-left">
        <div className="i-name">
            <span>Hey! I am</span>
            <span>Mihir Sen</span>
            <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
        </div>

          <button className="button i-button">Hire me</button> 
          <div className='i-icon'>
            <a href='https://github.com/mihirsen' target='blank'>
            <img src={Github} alt=""/></a>
            <a href='https://www.linkedin.com/in/mihir-sen-ba413320a/' target='blank'>
            <img src={linkedin} alt=""/></a>
            <a href='https://www.instagram.com/m1h14_s3n/' target='blank'>
            <img src={Instagram} alt=""/></a>
         </div>

        </div> 

       <div className="i-right">
           
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={boy} alt=""/>
          <img src={glassesimoji} alt=""/>
          <div style={{top:'-4%' , left: '68%'}}>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
          </div>
          <div style={{top:'18rem' , left:'0rem'}}>
            <div>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </div>
            <div className='blur' style={{background: "rgb(238 210 255"}}></div>
          </div>
        </div> 
    </div>
  )
}

export default Intro;