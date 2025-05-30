import React from 'react';
import styled from 'styled-components';
import { useTheme } from "../them/ThemeContext";
import './projects.css';
const Projects = () => {
    const { theme } = useTheme();
  return (
    <div  className={`projects ${theme}`}>

    <StyledWrapper>
      <div className='cardest' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap: "40px", }}>
      <div className="card" />
      <div className="card" />
      <div className="card" />

      </div>
    </StyledWrapper>
    </div>
   
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 370px;
    height: 350px;
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }`;

export default Projects;
