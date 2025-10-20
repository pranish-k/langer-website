import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation">
      <a
        href="#home"
        onClick={() => setCurrentPage("home")}
        className={currentPage === "home" ? "active" : ""}
      >
        HOME
      </a>
      <a
        href="#professor"
        onClick={() => setCurrentPage("professor")}
        className={currentPage === "professor" ? "active" : ""}
      >
        PROFESSOR
      </a>
      <a
        href="#author"
        onClick={() => setCurrentPage("author")}
        className={currentPage === "author" ? "active" : ""}
      >
        AUTHOR
      </a>
      <a
        href="#speaker"
        onClick={() => setCurrentPage("speaker")}
        className={currentPage === "speaker" ? "active" : ""}
      >
        SPEAKER
      </a>
      <a
        href="#consultant"
        onClick={() => setCurrentPage("consultant")}
        className={currentPage === "consultant" ? "active" : ""}
      >
        CONSULTANT
      </a>
      <a
        href="#social-entrepreneur"
        onClick={() => setCurrentPage("social-entrepreneur")}
        className={currentPage === "social-entrepreneur" ? "active" : ""}
      >
        SOCIAL ENTREPRENEUR
      </a>
    </nav>
  );
};

export default Navigation;
