import React from "react";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#professor" onClick={() => setCurrentPage("professor")}>Professor</a>
        <a href="#author" onClick={() => setCurrentPage("author")}>Author</a>
        <a href="#speaker" onClick={() => setCurrentPage("speaker")}>Speaker</a>
        <a href="#consultant" onClick={() => setCurrentPage("consultant")}>Consultant</a>
        <a href="#social-entrepreneur" onClick={() => setCurrentPage("social-entrepreneur")}>
          Social Entrepreneur
        </a>
      </div>
      <div className="footer-bottom">
        <a href="#privacy-policy" onClick={() => setCurrentPage("privacy-policy")}>Privacy Policy</a>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
