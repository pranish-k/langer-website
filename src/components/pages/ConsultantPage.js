import React from "react";

const ConsultantPage = () => {
  return (
    <div className="page-content">
      <h1>CONSULTANT</h1>

      <div className="about-section">
        <h2>ABOUT ART LANGER</h2>
        <div className="about-content">
          <img
            src="/arthur_consultant.jpg"
            alt="Dr. Arthur Langer Consulting"
            className="about-image"
          />
          <div className="about-text">
            <p>
              Arthur M. Langer, Associate Vice Provost and Professor of
              Practice, leads the Center for Technology Management and Digital
              Leadership at Northeastern University. He also serves on the
              faculty of the Department of Organization and Leadership at the
              Graduate School of Education (Teachers College).
            </p>

            <p>
              Dr. Langer consults with corporations and universities on
              information technology, staff development, management
              transformation, and curriculum development around the globe. Prior
              to joining the full-time faculty at Columbia University, Dr.
              Langer was Executive Director of Computer Support Services at
              Coopers and Lybrand, General Manager and Partner of Software Plus,
              and President of Macco Software.
            </p>

            <p>
              Dr. Langer holds a B.A. in Computer Science, and M.B.A in
              Accounting/Finance, and an Ed. D. from Columbia University.
            </p>
          </div>
        </div>
      </div>

      <div className="company-section">
        <h2>A. LANGER & ASSOCIATES, INC.</h2>

        <div className="company-info">
          <div className="company-profile">
            <h3>COMPANY PROFILE</h3>
            <p>Sector: Technology</p>
            <p>Industry: Technology Services</p>
            <p>Sub-Industry: IT Services</p>
            <p>
              A. Langer & Associates, Inc. provides information technology
              services. The Company offers services such as software support,
              computer systems design, and data processing facilities
              management.
            </p>
          </div>

          <div className="corporate-info">
            <h3>CORPORATE INFORMATION</h3>
            <p>Address:</p>
            <p>8 Perth Lane</p>
            <p>New City, NY 10958</p>
            <p>United States</p>
            <p>Phone: 1-212-854-5218</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>CONTACT INFORMATION</h2>
        <div className="contact-grid">
          <div>
            <strong>Email:</strong> al261@columbia.edu
          </div>
          <div>
            <strong>Phone (O):</strong> 212-854-5218
          </div>
          <div>
            <strong>Phone (M):</strong> 914-261-6142
          </div>
          <div>
            <a href="https://www.linkedin.com/in/arthur-langer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantPage;
