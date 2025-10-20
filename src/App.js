import React, { useState } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import HomePage from "./components/pages/HomePage";
import ProfessorPage from "./components/pages/ProfessorPage";
import AuthorPage from "./components/pages/AuthorPage";
import SpeakerPage from "./components/pages/SpeakerPage";
import ConsultantPage from "./components/pages/ConsultantPage";
import SocialEntrepreneurPage from "./components/pages/SocialEntrepreneurPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "professor":
        return <ProfessorPage />;
      case "author":
        return <AuthorPage />;
      case "speaker":
        return <SpeakerPage />;
      case "consultant":
        return <ConsultantPage />;
      case "social-entrepreneur":
        return <SocialEntrepreneurPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
