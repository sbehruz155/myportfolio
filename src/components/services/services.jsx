import React from 'react';
import './services.css';
import { useTheme } from "../them/ThemeContext";
const Services = () => {
   const { theme } = useTheme();
  return (

    <div className={`services ${theme}`}>
<div className='servicess'>

    <div  className="container">
      <h1 className="title">Saydullayev Behruz Bekmurod o‘g‘li</h1> 
      <p><strong>Telefon:</strong> +998 93 057 0207</p>
      <p><strong>Email:</strong> behruzsaydullayev102@gmail.com</p>
      <p><strong>Manzil:</strong> Namangan sh., Uychi tum., Yorqo‘rg‘on qishlog‘i, Mtonat ko‘chasi, 62-uy</p>

      <section className="section">
        <h2>Ma’lumot</h2>
        <p>33-umumiy o‘rta ta’lim maktabi, Uychi tumani (2016 — hozirgacha)</p>
      </section>

      <section className="section">
        <h2>Ish tajribasi</h2>
        <p>Hozircha rasmiy ish tajribam yo‘q, biroq yangi narsalarni tez o‘rganaman va jamoada ishlashga tayyorman.</p>
      </section>

      <section className="section">
        <h2>Ko‘nikmalar</h2>
        <p>HTML, CSS, JavaScript, React, Vite, Node.js, MongoDB, PostgreSQL, Git, GitHub</p>
      </section>

      <section className="section">
        <h2>Tillari</h2>
        <p>O‘zbek tili — ona tili</p>
      </section>

      <section className="section">
        <h2>Sertifikatlar va kurslar</h2>
        <p>ALGORITM o‘quv markazi — HTML, CSS, JavaScript, React, Node.js, MongoDB, PostgreSQL kurslari (hammasidan sertifikatlar mavjud)</p>
      </section>

      <section className="section">
        <h2>Maqsad</h2>
        <p>Junior Fullstack Developer lavozimiga ishga kirib, malakamni oshirish va amaliyotda o‘z bilimlarimni kengaytirish.</p>
      </section>
        <div className="download-container">
        <a
          href="/Behruz_Saydullayev_Resume.docx"
          download="Behruz_Saydullayev_Resume.docx"
          className="download-button"
        >
          Rezyumeni yuklab olish
        </a>
      </div>
    </div>
</div>
    </div>
  );
};

export default Services;


