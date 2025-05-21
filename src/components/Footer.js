import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
return (
    <footer className="custom-footer">
    <p onClick={()=>window.open('https://Madeshdev.netlify.app','_blank')}>
        Made by <span className="footer-name">Madesh</span>
    </p>
    </footer>
);
};

export default Footer;
