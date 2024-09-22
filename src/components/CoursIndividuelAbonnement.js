import React, { useEffect } from "react";

const CoursIndividuelAbonnement = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Nettoyage lors du démontage du composant
    };
  }, []);

  return (
    <div className="cardTarif">
      <h3>Abonnements</h3>
      <div
        className="stripe-pricing-table-container"
        dangerouslySetInnerHTML={{
          __html: `<stripe-pricing-table
                    pricing-table-id="prctbl_1Q1o6IRs1cHFXXwv4rMvAS0v"
                    publishable-key="pk_live_51PewxMRs1cHFXXwvf5QY6MFK1XNc1R83RhUqNwmbnJR050uPa5e1rCAYrxO22TIbHVkdWmuNmIpgoLLpH8i14OTC00rBdGZLtk">
                  </stripe-pricing-table>`,
        }}
      />
    </div>
  );
};

export default CoursIndividuelAbonnement;
