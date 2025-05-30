import React from 'react'
import './aboutMe.css'
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useTheme } from "../them/ThemeContext";
import { FaUserTie } from "react-icons/fa6";
function AboutMe() {
  const { theme } = useTheme();
  return (
    <>

      <div className={`aboutMe ${theme}`} >
        <ul>
          <div className="foolAboutMe">
            <div className="rightAboutMe">
              <li><FaUserGraduate />Full Name : Saydullayev Behruz Bekmurod o‘g‘li</li>
              <li><FaUserTie />First Name : Behruz</li>
              <li><FaUser />Lest Name : Saydullayev</li>
              <li>📅 Date of Birth : October 20, 2009</li>
              <li>📍 Address: Yorq‘rg‘on village, Uychi district, Namangan region</li>
            </div>
            <div className='leftAboutMe'><li>📞 Phone : +998 93 057 02 07</li>
              <li>📧 Email : behruzsaydullayev102@gmail.com</li>
              <li>🔗 LinkedIn : Behruz Saydullayev</li>
              <li><FaTelegramPlane /> Telegram : @nr1shadow</li>
              <li><AiFillInstagram /> Instagram : @_s.behruz_</li></div>
          </div>
          <br />
          <div className="center"> <li style={{ marginLeft: "40px",marginBottom: "10px",marginTop: "-10px", }}>Certifications & Projects</li>
            <li>🏅 Algorithm Course Certificate <br />🏅 HTML & CSS Certificate <br />🏅 JavaScript Certificate <br />🏅 React Certificate<br />🏅 NOT.js Certificate</li></div>
        </ul>
        {/* <div className='myPhoto'></div> */}
      </div>

    </>
  )

}

export default AboutMe