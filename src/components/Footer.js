import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerContent">
      <p>&copy; {currentYear} French Take Off. Tous droits réservés.</p>
      <div className="socialLinks">
        <a
          href="https://wa.me/0632012245"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href="mailto:contact@french-take-off.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/french_take_off"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="footerLinks">
        <Link to="/cgv" target="_blank">Conditions Générales de Ventes</Link>
        <Link to="/pdc" target="_blank">Politique de confidentialité</Link>
      </div>
    </div>
  );
};

export default Footer;
