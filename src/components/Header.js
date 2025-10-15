import React from "react";

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-link" onClick={() => setCurrentPage("home")}>
        <img
          src="/header_image.png"
          alt="Arthur M. Langer"
          className="header-image"
        />
      </div>
    </header>
  );
};

export default Header;
