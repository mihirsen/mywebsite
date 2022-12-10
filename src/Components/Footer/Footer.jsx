import React from 'react';
import './Footer.css';

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width:'100%'}} />
        <div className="f-content">
            <span>mihir123sen@gmail.com</span>
            <div className="f-icon">
                <a href='https://github.com/mihirsen' target='blank'><Insta color='white' size='3rem'/></a>
                <a href='https://www.facebook.com/mihir.sen.319247/' target='blank'><Facebook color='white' size='3rem'/></a>
                <a href='https://github.com/mihirsen' target='blank'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer