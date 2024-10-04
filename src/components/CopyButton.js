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
    <div>
      <button onClick={handleCopy}>{messageACopier}</button>

      {showMessage && (
        <div style={messageStyle}>Le contenu a bien été copié !</div>
      )}
    </div>
  );
};

const messageStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "green",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  zIndex: 1000,
};

export default CopyButton;
