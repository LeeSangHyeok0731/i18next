import React from "react";
import i18next from "i18next";

const ChangeButton = () => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ko")}>Korean</button>
    </div>
  );
};

export default ChangeButton;
