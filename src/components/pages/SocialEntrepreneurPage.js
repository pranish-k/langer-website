import React from "react";

const SocialEntrepreneurPage = () => {
  return (
    <div className="page-content">
      <h1>SOCIAL ENTREPRENEUR</h1>

      <div className="wos-section">
        <h2>
          <a
            href="https://wforce.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            WORKFORCE OPPORTUNITY SERVICES
          </a>
        </h2>

        <a
          href="https://wforce.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', margin: '20px 0' }}
        >
          <img
            src="/wos.jpg"
            alt="Workforce Opportunity Services"
            style={{
              maxWidth: '15%',
              height: 'auto',
              display: 'block'
            }}
          />
        </a>

        <p>
          Workforce Opportunity Services (WOS) is a nonprofit charitable
          organization that helps empower young adults and military veterans
          through unique, innovative work-study programs. WOS works with
          companies to identify specific staffing needs and then trains its
          students to fill those roles. The goal: To provide these students
          with long-term career and educational opportunities, along with the
          tools to become productive citizens.
        </p>

        <p>
          WOS works with academic partners (including Rutgers, Penn State,
          Georgia Tech, University of Texas at El Paso, University of North
          Carolina at Charlotte, and others) to create company-appropriate
          academic curriculums. Carefully-selected students are then trained
          to fill roles in IT services, programming and design, cybersecurity,
          finance & accounting, customer services, operations, and other areas
          requested by the companies. Program graduates are now working with
          Johnson & Johnson, Prudential, ADP, HBO, Hewlett Packard, Merck,
          Panasonic, and other global and national organizations.
        </p>

        <p>
          Since its founding 13 years ago, WOS has become a trusted advisor to
          many companies on human resources, staffing, and training matters.
          It has forged relationships between universities and companies in
          their areas, brought its program and approach into the workplace,
          and trained hundreds of student. WOS continues to expand by joining
          forces with the universities and companies similarly dedicated to
          creating opportunities and building the careers of aspiring young
          adults and military veterans.
        </p>

      </div>

      <div className="mentoring-section">
        <h2>MENTORING</h2>

        <p>
          Dr. Langer believes in the importance of mentoring individuals to
          help them succeed both academically and professionally. He brings
          this philosophy into his programs and workshops. For Columbia's
          Executive Master's of Science in Technology Management program, he
          has built a team of over 200 high- level, experienced industry
          mentors, who work with students one-on-one on their Master's project
          and on preparing for executive roles. This intense mentoring takes
          students beyond their academic work and gives them insights, ideas,
          and practice on presenting their work, operating effectively, and
          building their careers.
        </p>
      </div>

      <div className="business-education-section">
        <h2>BUILDING SOCIAL ENTREPRENEURSHIP INTO BUSINESS EDUCATION</h2>

        <p>
          Dr. Langer believes in bringing the concepts of social
          entrepreneurship and social good into his education work. He is
          dedicated to advancing the IT profession by building executives, not
          just with their technical expertise, but also with the business
          knowledge and awareness that allows them to build productive,
          ethical, and successful companies. He sees that it is not enough to
          have knowledge in a functional area; successful executives also need
          to learn how to analyze, strategize, decide, lead, and communicate
          effectively. Dr. Langer creates curriculums containing this range of
          course material to aid in developing the broad, full executives that
          are needed in today's complex and rapidly-changing business
          environment. By focusing on the needs of his students, the
          organizations where they will work, and society as a whole, Dr.
          Langer's programs go beyond traditional academics into training the
          executives who will be able to meet the full range of demands of
          their executive roles.
        </p>
      </div>
    </div>
  );
};

export default SocialEntrepreneurPage;
