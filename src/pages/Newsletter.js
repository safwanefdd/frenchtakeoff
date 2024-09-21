import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="newsletterPage">
      <Navigation />
      <div className="form">
      <h1>Newsletter</h1>
        <iframe
          title="Newsletter Signup Form"
          data-w-type="embedded"
          scrolling="no"
          src="https://svo8n.mjt.lu/wgt/svo8n/xt0w/form?c=8d44428a"
        ></iframe>

        <script
          type="text/javascript"
          src="https://app.mailjet.com/pas-nc-embedded-v1.js"
        ></script>
      </div>
      <Link to="https://svo8n.mjt.lu/wgt/svo8n/xt0w/form?c=8d44428a" className="btn" target="_blank">
        Si le formulaire ne s'affiche pas correctement, clique ici
      </Link>
      <Footer />
    </div>
  );
};

export default Newsletter;
