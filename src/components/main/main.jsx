import React, { useState, useEffect }  from 'react'
import './main.css'
import styled from 'styled-components';
import frontend from '../images/111.png'
import backend from '../images/222.png'
import full from '../images/333.png'
import website from '../images/444.png'
import myimg from '../images/myphoto.png'
import myimg2 from '../images/myphoto2.png'
import { useTheme } from "../them/ThemeContext";
import { FaChevronUp } from "react-icons/fa";
function Main(){
 
  const [slider1, setSlider1] = useState(100);
  const [slider2, setSlider2] = useState(95);
  const [slider3, setSlider3] = useState(93);
  const [slider4, setSlider4] = useState(93);
  const [slider5, setSlider5] = useState(95);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // 200px dan pastga tushganda tugma chiqadi
      } else {
        setIsVisible(false); // 200px dan yuqorida bo‘lsa, tugma yashiriladi
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); };
  const { theme } = useTheme();
  return (
    <>
    <main className={`main ${theme}`}>
    <p >Hi I am</p>
    <p className='name'>Behruz Saydullayev</p>
    <div className='h1andsamp'>
    <h1>Full-Stack</h1>
    <samp>Developer</samp>
    </div>
    <div className='tavfsif'>
    <p>I am an experienced developer working with both frontend and backend. I create efficient and high-quality solutions using modern technologies.</p>
    </div>
    <div className='myPhoto'><img style={{
      width: "400px",
      height: "130%",
      borderRadius: "45%",
      marginTop: "-122px",
      marginLeft: "-5px",
    }} src={myimg} alt="myimg" /></div>
    <StyledWrapper>
      <div className="card">
        <ul>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://www.facebook.com/profile.php?id=61574832803010">
              <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a>
            <div className="text">Facebook</div>
          </li>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://x.com/BehruzCoder">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <div className="text">Twitter</div>
          </li>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://www.instagram.com/_s.behruz_/">
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <div className="text">Instagram</div>
          </li>
        </ul>
      </div>
    </StyledWrapper>
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      style={{
        display: isVisible ? "block" : "none", // CSS orqali ko‘rinishini boshqarish
        width: "10px",
        height: "60px",
        borderRadius: "50%",
        fontSize: "24px",
        fontWeight: "bold",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    ><FaChevronUp style={{
      marginLeft: "-15px",
      fontSize: "30px",
    }}/></button>
    <div className="box">
    <div className='myPhoto2'><img style={{
      width: "470px",
      height: "147%",
      borderRadius: "50%",
      marginTop: "-187px",
      marginLeft: "-40px",
    }} src={myimg2} alt="myimg" /></div>
    <div className='myAbout'>
      <p>About Me</p>
      <div className='aboutText'>
      <p>I am a frontend and backend developer skilled in building scalable web applications and seamless user experiences. Passionate about modern technologies, I create high-quality solutions that meet both user and business needs.</p>
      </div>
      <br />
      {/* <input type="range" min="0" max="100" value="50"> */}
      <legend>HTML</legend>
      <input
        type="range"
        min="0"
        max="100"
        value={slider1}
        onChange={(e) => setSlider1(e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #fd6f00 ${slider1}%, #ccc ${slider1}%)`
        }}
        disabled
      />
      <legend>CSS</legend>
      <input
        type="range"
        min="0"
        max="100"
        value={slider2}
        onChange={(e) => setSlider2(e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #fd6f00 ${slider2}%, #ccc ${slider2}%)`
        }}
        disabled
      />
      <legend>JavaScript</legend>
      <input
        type="range"
        min="0"
        max="100"
        value={slider3}
        onChange={(e) => setSlider3(e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #fd6f00 ${slider3}%, #ccc ${slider3}%)`
        }}
        disabled
      />
      <legend>REACT</legend>
      <input
        type="range"
        min="0"
        max="100" 
        value={slider4}
        onChange={(e) => setSlider4(e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #fd6f00 ${slider4}%, #ccc ${slider4}%)`
        }}
        disabled
      />  
      <legend>NOT JS</legend>
      <input
        type="range"
        min="0"
        max="100"
        value={slider5}
        onChange={(e) => setSlider5(e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #fd6f00 ${slider5}%, #ccc ${slider5}%)`
        }}  
        disabled
      />    </div>  
    </div>
    <div className="services">
      <p className='servicesWord'>Services</p>
      <div className='servicesText'>
      <p>I provide high-quality web development solutions, from frontend design to backend functionality. Whether you need a dynamic website, a powerful API, or a full-stack application, I can help bring your ideas to life.</p>
      </div>
     <div className="carder">
     <div class="card2">
  <div class="card-info2">
    <p class="title2"><img src={frontend} alt="frontend" /><p className='cardin'>Frontend Development</p><p className='cardText'>I build fast, responsive web apps with user-friendly interfaces.</p></p>
  </div>
</div>
      <div class="card2">
  <div class="card-info2">
    <p class="title2"><img src={backend} alt="backend" /><p className='cardin'>Backend Development</p><p className='cardText'> I develop secure servers, REST APIs, and manage databases.</p></p>
  </div>
</div>
      <div class="card2">
  <div class="card-info2">
    <p class="title2"><img src={full} alt="full" /><p className='cardin'>Full-Stack Development</p> <p className='cardText'>I develop full web solutions with seamless frontend-backend integration.</p></p>
  </div>
</div>
      <div class="card2">
  <div class="card-info2">
    <p class="title2"><img src={website} alt="website" /><p className='cardin'>Websites & Admin Panels</p><p className='cardText'>I build business websites and admin panels for automation.</p></p>
  </div>
</div>
     </div>
    </div>
    <div className="project">
      <p className='projectWord'>My Projects</p>
      <div className="projectText"><p>Here are some of the projects I’ve worked on, showcasing my expertise in both frontend and backend development. Each project reflects my skills in creating efficient, scalable, and user-friendly applications.</p></div>
    </div>
  



    {/* <div className="together">
      <p className='togetherWord'>Lets Design Together</p>
      <div className="togetherText"><p>I enjoy bringing creative ideas to life through design and development. Whether it's building sleek user interfaces or crafting seamless backend solutions, let's collaborate to create something amazing!</p></div>
      
    </div> */}

    {/* <div className="input-group">
        <input type="email" className="input" id="Email" name="Email" placeholder="email@gmail.come" autoComplete="off" />
        <input className="button--submit" defaultValue="Subscribe" type="submit" />
      </div> */}
    </main>
    </>
  )
}
const StyledWrapper = styled.div`
  .card {
    max-width: fit-content;
    // transform: rotateZ(90deg);
    border-radius: 15px;
    display: flex;
    margin-left: 625px;
    margin-top: 15px;
    flex-direction: column;
    align-content:
    justify-content:
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
  }

  .card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items:
    justify-content:
    align-content:
    flex-wrap: wrap;
    flex-direction: row;
    // transform: rotateZ(270deg);
  }

  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    fill: currentColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: rgb(255, 174, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }`;

export default Main
