import React from "react";

const Warning = ({ warning }) => {
  // Warning significa aviso ou adivertencia
  if (!warning) {
    return null;
  }
  return <div>Aviso!</div>;
};

export default Warning;
