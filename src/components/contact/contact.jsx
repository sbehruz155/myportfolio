import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { useTheme } from "../them/ThemeContext";
import './contact.css';
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_3grscas',      // masalan: service_abcd123
      'template_rsy3vrh',     // masalan: template_efgh456
      form.current,
      'buS6Rc_ir413bwb-o'       // masalan: bJqzD_xxxxxxx
    ).then(
      () => {
        alert("Xabar muvaffaqiyatli yuborildi!");
        form.current.reset();
      },
      (error) => {
        alert("Xatolik yuz berdi: " + error.text);
      }
    );
  };
  
  const { theme } = useTheme();
  return (
    <div  className={`contact ${theme}`}>

   <div className='formss' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
    <center>
       <StyledWrapper>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-group">
            <label htmlFor="email"> Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Send message</label>
            <textarea name="message" id="textarea" rows={10} required />
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </StyledWrapper>
    </center>
   </div>
  </div>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#FD6F00, rgba(30, 30, 30, 1)) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #FD6F00;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #FD6F00;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #FD6F00;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #FD6F00;
    border-color: #FD6F00;
    color: #fff;
  }`;

export default Contact;