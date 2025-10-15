import React from "react";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a onClick={() => setCurrentPage("professor")}>Professor</a>
        <a onClick={() => setCurrentPage("author")}>Author</a>
        <a onClick={() => setCurrentPage("speaker")}>Speaker</a>
        <a onClick={() => setCurrentPage("consultant")}>Consultant</a>
        <a onClick={() => setCurrentPage("social-entrepreneur")}>
          Social Entrepreneur
        </a>
      </div>
      <div className="footer-bottom">
        <a onClick={() => setCurrentPage("privacy-policy")}>Privacy Policy</a>
        <p>Copyright © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
