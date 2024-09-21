import React from "react";
import { Link } from "react-router-dom";

const CoursIndividuel = () => {
  return (
    <div>
      <div className="card">
        <h2>Cours Individuel</h2>
        <p>Cours entierement personnalisés et adaptés à tes besoins</p>
        <Link to="#infoCours" className="btn">
            En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default CoursIndividuel;
