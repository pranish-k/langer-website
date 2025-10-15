import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation">
      <a
        onClick={() => setCurrentPage("professor")}
        className={currentPage === "professor" ? "active" : ""}
      >
        PROFESSOR
      </a>
      <a
        onClick={() => setCurrentPage("author")}
        className={currentPage === "author" ? "active" : ""}
      >
        AUTHOR
      </a>
      <a
        onClick={() => setCurrentPage("speaker")}
        className={currentPage === "speaker" ? "active" : ""}
      >
        SPEAKER
      </a>
      <a
        onClick={() => setCurrentPage("consultant")}
        className={currentPage === "consultant" ? "active" : ""}
      >
        CONSULTANT
      </a>
      <a
        onClick={() => setCurrentPage("social-entrepreneur")}
        className={currentPage === "social-entrepreneur" ? "active" : ""}
      >
        SOCIAL ENTREPRENEUR
      </a>
    </nav>
  );
};

export default Navigation;
