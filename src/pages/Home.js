import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import gift from "../assets/images/gift.jpeg";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
      <div className="marqueeContainer">
        <div className="marquee">
          <h3>
            Teste ton niveau en français{" "}
            <Link target="_blank" to="/test-de-niveau">
              ICI
            </Link>
          </h3>
        </div>
      </div>
      <h1 className="title">Accueil</h1>
      <div className="banner">
        <p>
          <span>Pour parler ENFIN couramment français !</span>
          <br />
          Je t’aide à progresser en français et à parler avec assurance.
          <br />
          Grace à mon programme tu vas pouvoir comprendre les français et
          échanger avec eux, prendre confiance en toi et atteindre tes objectifs
          que ce sois pour voyager, pour vivre en France ou tout simplement pour
          le plaisir !
        </p>
        <Link to="/services" className="btn">
          En savoir plus
        </Link>
      </div>
      <div className="gift">
        <h2>Télécharge des ressources gratuites ici</h2>
        <div className="image">
          <img src={gift} alt="gift" />
        </div>
        <Link target="_blank" to="/construction" className="btn">
          Télécharger <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
      <div className="podcastSpotify">
        <h2>Ecoute mes podcasts sur Spotify</h2>
        <h3>Dernier Podcast</h3>
        <iframe
          title="Spotify Podcast"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/show/6hjyO9w6miZDuMKHcmaRLo?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="moreInfo">
        <h2>Plus d'informations</h2>
        <p>
          Tu veux en savoir plus sur moi, sur mon parcours, sur ma méthode, sur
          mes services, sur mes tarifs ?<br />
          Tu trouveras{" "}
          <Link to="/about">toutes les informations nécessaires ici</Link>.
          N’hésite pas à me contacter si tu as des questions.
        </p>
        <Link to="/about" className="btn">
          En savoir plus
        </Link>
      </div>
      <div className="newsletterContainer">
        <h2>Newsletter</h2>
        <div className="form">
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
        <Link
          target="_blank"
          to="https://svo8n.mjt.lu/wgt/svo8n/xt0w/form?c=8d44428a"
          className="btn"
        >
          Si le formulaire ne s'affiche pas correctement, clique ici{" "}
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
      <div className="testimonialsContainer">
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
