import React from 'react';
import './landing.css';
import testImage from '../images/desktop.PNG';
import Fade from 'react-reveal';
import { FaFileAlt, FaCode } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div>

      <div className="landing">
        <h1>Markdown Made Easy!</h1>
        <p>Generate markdown with ease using drag and drop widgets</p>
        <div className='landing-btn-flex'>
          <Link to='instructions' smooth={true}><button className='landing-btn'> INSTRUCTIONS 	&nbsp; < FaFileAlt /> </button></Link>
          <a href="#intructions"><button className='landing-btn'>&nbsp; LOGIN &nbsp;<MdPerson/></button></a>
          <a href="#intructions"><button className='landing-btn'> &nbsp; CODE &nbsp; <FaCode/> &nbsp;</button></a>
        </div>
        <Fade ><img className='landing-img' alt="package" src={testImage} /></Fade>
      </div>
    </div>
  );
};

export default LandingPage;		