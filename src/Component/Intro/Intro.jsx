import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {Link} from "react-scroll";
function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className='i-name'>
            <span>Hy! I  Am </span>
            <span>Somesh Sangwan</span>
            <span> A Web Developer with intermediate level of experience in web designing, managing the backend server and database as
well,and produces the Quality work.</span>
        </div>
        <button className="button i-button"> 
        
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" > 
            Hire me
            </Link>
        </button>
        <div className="i-icons">
          <a href="https://github.com/someshsangwan"><img src={Github} alt=""/></a>
          <a href="https://www.linkedin.com/in/somesh-sangwan-14545a1b7/"><img src={LinkedIn} alt=""/></a>
          <a href="https://www.instagram.com/s_o_m_e_s_h_1938/"><img src={Instagram} alt=""/></a>
           
        </div>
        </div>
        <div className='i-right'>
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={boy} alt=""/>
          <div style={{top:'-4%',left:'68%'}} className='floating-div'>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </div>
          <div style={{top:'18rem',left:'0rem'}}  className='floating-div'>
            <FloatingDiv image={thumbup} txt1='Competitive' txt2='Programmer'/>
          </div>


        </div>
    </div>
  )
}

export default Intro;