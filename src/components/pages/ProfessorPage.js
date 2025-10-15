import React from "react";

const ProfessorPage = () => {
  return (
    <div className="page-content">
      <h1>PROFESSOR</h1>

      <div className="institution-section">
        <h2>NORTHEASTERN UNIVERSITY</h2>
        <a
          href="https://damore-mckim.northeastern.edu/people/arthur-langer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://admissions.northeastern.edu/wp-content/uploads/2023/08/FA24-Krentzman-Quad-Northeastern-Sign.jpg"
            alt="Northeastern University"
            className="institution-image"
          />
        </a>
        <h3>
          Associate Vice Provost <br></br>
          Director, Center for Technology Management and Digital Leadership{" "}
          <br></br>
          Professor of Practice, Entrepreneurship & Innovation
        </h3>
        <p>
          The Center for Technology Management and Digital Leadership at
          Northeastern University is led by Dr. Arthur M. Langer, Associate Vice
          Provost, Professor of Practice.
        </p>
        <p>
          <a
            href="https://damore-mckim.northeastern.edu/people/arthur-langer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Dr. Langer's Northeastern profile →
          </a>
        </p>
      </div>

      <div className="institution-section">
        <h2>COLUMBIA UNIVERSITY</h2>
        <img
          src="https://www.tc.columbia.edu/media/landing/home/outside-TC-columbia-land-acknowledgment.jpg"
          alt="Columbia University Teachers College"
          className="institution-image"
        />
        <h3>Adjunct Full Professor at Teachers College</h3>
        <p>
          He is Professor of Professional Practice, Director of the Center for
          Technology Management, and Academic Director of the M.S. in Technology
          Management programs at Columbia University. He also serves on the
          faculty of the Department of Organization and Leadership at the
          Graduate School of Education (Teachers College).
        </p>
        <p>
          Dr. Langer's research and instructional interests include: mentoring
          of nontraditional students; adult education, workplace learning,
          distance education, technology and education, and curricular design.
          The courses he developed include: IT and Organizational Learning; How
          Adults Learn; Purpose and Policies of Higher Education; College &
          University Leadership; and Technology & Higher Education.
        </p>
      </div>
    </div>
  );
};

export default ProfessorPage;
