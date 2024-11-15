import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import gift from "../assets/images/gift.jpeg";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
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
      <NewsLetter />
      <div className="testimonialsContainer">
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
