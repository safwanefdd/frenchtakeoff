import React, { useState } from "react";

const CopyButton = ({ messageACopier }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageACopier).then(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    });
  };

  return (
    <div className="copyButtonComponent">
      <button className="animatedButton" onClick={handleCopy}>
        {messageACopier}
      </button>

      {showMessage && (
        <div className="success">Le contenu a bien été copié !</div>
      )}
    </div>
  );
};

export default CopyButton;
