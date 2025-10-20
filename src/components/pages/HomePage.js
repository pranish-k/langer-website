import React from "react";
import Carousel from "../Carousel";

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <Carousel />

      <div className="home-sections">
        <div className="section-row">
          <div className="section professor-section">
            <h2>
              <a href="#professor" onClick={() => setCurrentPage("professor")}>
                PROFESSOR
              </a>
            </h2>
            <img src="/teacher.jpeg" alt="Dr. Arthur Langer Teaching" />
            <div className="university-section">
              <h3>NORTHEASTERN UNIVERSITY</h3>
              <p>
                Associate Vice Provost; Director, Center for Technology
                Management and Digital Leadership; Professor of Practice,
                Entrepreneurship & Innovation
              </p>
            </div>
            <div className="university-section">
              <h3>COLUMBIA UNIVERSITY</h3>
              <p>
                Honorary Professor of Practice in the Department of Organization
                and Leadership, Teachers College
              </p>
            </div>
            <p className="professor-quote">
              "I believe that we have the responsibility to prepare the upcoming
              generations of students and to work toward the continuing,
              evolving growth and progress of our society. I see education as
              the main vehicle for accomplishing this vital work." - Dr. Langer
            </p>
          </div>

          <div className="section author-section">
            <h2>
              <a href="#author" onClick={() => setCurrentPage("author")}>
                AUTHOR
              </a>
            </h2>
            <div className="book-covers-grid">
              <a
                href="https://link.springer.com/book/10.1007/978-3-031-76212-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-76212-3?as=webp"
                  alt="Analysis and Design of Next-Generation Software Architectures - 2nd Edition"
                />
              </a>
              <a
                href="https://a.co/d/7j2Hj0d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://m.media-amazon.com/images/I/81GI1yQshxL._SY522_.jpg"
                  alt="Information Technology and Organizational Learning - 4th Edition"
                />
              </a>
              <a
                href="https://a.co/d/9d3WUhN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://m.media-amazon.com/images/I/71+d0XFwiOL._SY522_.jpg"
                  alt="Analysis and Design of Next-Generation Software Architectures - 1st Edition"
                />
              </a>
              <a
                href="https://link.springer.com/book/10.1007/978-1-4471-6799-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-1-4471-6799-0?as=webp"
                  alt="Guide to Software Development"
                />
              </a>
            </div>
            <p>
              Dr. Langer regularly publishes books and articles on a range of
              technology, management, and education topics. His recent
              publications are listed here, and his books are available through
              Amazon.
            </p>
          </div>
        </div>

        <div className="section-row">
          <div className="section speaker-section">
            <h2>
              <a href="#speaker" onClick={() => setCurrentPage("speaker")}>
                SPEAKER
              </a>
            </h2>
            <img src="/art_speaker.jpg" alt="Dr. Arthur Langer Speaking" />
            <p>
              Dr. Langer is a recognized speaker and authority on the topics
              mentioned above and in the areas of Technology Management and
              Leadership Workforce Development and Diversity, Adult Learning and
              Mentoring, Organizational Learning.
              <br></br>
              Dr. Langer frequently presents to corporations, at business and
              professional events, and at meetings and conferences. His recent
              presentations are listed here. Please contact him about presenting
              for you.
            </p>
          </div>

          <div className="section social-section">
            <h2>
              <a
                href="#social-entrepreneur"
                onClick={() => setCurrentPage("social-entrepreneur")}
              >
                SOCIAL ENTREPRENEUR
              </a>
            </h2>
            <h3>Workforce Opportunity Services (WOS)</h3>
            <img src="/WOS_art.jpg" alt="Dr. Arthur Langer at WOS Event" />
            <p>
              Workforce Opportunity Services (WOS), a 501(c)(3) nonprofit, is
              dedicated to developing talent from local communities and
              underserved populations. Using a scientifically-based model, WOS
              recruits, trains, and places high-potential candidates with
              leading organizations through a unique consultant-to-employee
              pipeline. This process ensures individuals are fully integrated
              into a company's business and culture, providing a seamless bridge
              between consultancy and full-time employment. <br />
              Founded in 2005 by Dr. Art Langer, WOS originated from his
              research at Columbia University focused on leveling the playing
              field for those with limited access to opportunities. Dr. Langer’s
              model emphasizes a blend of technical and interpersonal skills to
              ensure long-term career success. To date, this impactful approach
              has enabled WOS to serve over 7,500 individuals and partner with
              more than 75 major corporations worldwide, transforming lives
              while building better workforces.
            </p>
            <div className="wos-links">
              <br />
              <a href="https://wforce.org/">WOS Website</a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-publications">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Arthur Langer, Ed. D.</p>
          <p>
            Email: <a href="mailto:al261@columbia.edu">al261@columbia.edu</a>
          </p>
          <p>Phone (M): 914-261-6142</p>
          <br></br>
          <p>
            <a href="https://www.linkedin.com/in/arthur-langer">LinkedIn</a>
          </p>
        </div>

        <div className="publications">
          <h3>Publications by Art Langer</h3>
          <div className="publication-covers">
            <a
              href="https://link.springer.com/book/10.1007/978-3-031-76212-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-76212-3?as=webp"
                alt="Analysis and Design of Next-Generation Software Architectures - 2nd Edition"
              />
            </a>
            <a
              href="https://a.co/d/7j2Hj0d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/81GI1yQshxL._SY522_.jpg"
                alt="Information Technology and Organizational Learning - 4th Edition"
              />
            </a>
            <a
              href="https://a.co/d/9d3WUhN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/71+d0XFwiOL._SY522_.jpg"
                alt="Analysis and Design of Next-Generation Software Architectures - 1st Edition"
              />
            </a>
            <a
              href="https://link.springer.com/book/10.1007/978-1-4471-6799-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-1-4471-6799-0?as=webp"
                alt="Guide to Software Development"
              />
            </a>
          </div>
          <p>
            <a
              href="https://www.amazon.com/stores/author/B001HD3O2A/allbooks?ingress=0&visitId=3306fd26-3112-4430-b6af-d31fddd56c52&ref_=ap_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all publications by Art Langer on Amazon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
