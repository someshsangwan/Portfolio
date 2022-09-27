import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <div className="f-icon">
            <a href="https://www.instagram.com/s_o_m_e_s_h_1938/"><Insta color="white" size={"3rem"} /></a>
            <a href="https://www.facebook.com/someshsangwan.someshsangwan.5"><Facebook color="white" size={"3rem"} /></a>
            <a href="https://github.com/someshsangwan"><Gitub color="white" size={"3rem"} /></a>
            <a href="https://twitter.com/SOMESHC07482441"> <Twitter color="white" size={"3rem"} /></a>
            
            </div>
        <div className="thanks">
        <span style={{color:'black',fontSize:'22px'}}>2019eeb1201@iitrpr.ac.in</span>
        <br />
        <br />
        <br />
        <br />

        <span style={{color:'black',fontSize:'40px'}}>Thank You </span>
        </div>
         
        </div>
    </div>
     
  )
}

export default Footer