import React from "react";

const AuthorPage = () => {
  return (
    <div className="page-content">
      <h1>AUTHOR</h1>

      <div className="books-section">
        <h2>RECENT BOOKS</h2>

        <div className="book-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <a href="https://link.springer.com/book/10.1007/978-3-031-76212-3" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-76212-3?as=webp"
                alt="Analysis and Design of Next-Generation Software Architectures 2nd Edition"
                style={{ width: '200px', height: 'auto', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
            </a>
            <p>
              <strong>
                Analysis and Design of Next-Generation Software Architectures
              </strong>
            </p>
            <p>Generative AI, Cybersecurity, and Cloud Computing - 2nd edition</p>
            <p>© 2025</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://a.co/d/7j2Hj0d" target="_blank" rel="noopener noreferrer">
              <img
                src="https://m.media-amazon.com/images/I/81GI1yQshxL._SY522_.jpg"
                alt="Information Technology and Organizational Learning 4th Edition"
                style={{ width: '200px', height: 'auto', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
            </a>
            <p>
              <strong>
                Information Technology and Organizational Learning
              </strong>
            </p>
            <p>Managing Behavioral Change in the Digital Age - 4th Edition</p>
            <p>By Arthur M. Langer</p>
            <p>© 2024</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://a.co/d/9d3WUhN" target="_blank" rel="noopener noreferrer">
              <img
                src="https://m.media-amazon.com/images/I/71+d0XFwiOL._SY522_.jpg"
                alt="Analysis and Design of Next-Generation Software Architectures 1st Edition"
                style={{ width: '200px', height: 'auto', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
            </a>
            <p>
              <strong>
                Analysis and Design of Next-Generation Software Architectures
              </strong>
            </p>
            <p>5G, IoT, Blockchain, and Quantum Computing - 1st edition</p>
            <p>By Arthur M. Langer</p>
            <p>© 2020</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://link.springer.com/book/10.1007/978-1-4471-6799-0" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-1-4471-6799-0?as=webp"
                alt="Guide to Software Development"
                style={{ width: '200px', height: 'auto', marginBottom: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
            </a>
            <p>
              <strong>
                Guide to Software Development
              </strong>
            </p>
            <p>Designing and Managing the Life Cycle</p>
            <p>© 2016</p>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          Dr. Langer's books are available through{" "}
          <a href="https://www.amazon.com/s?k=Arthur+M.+Langer" target="_blank" rel="noopener noreferrer">Amazon.com</a> and{" "}
          <a href="https://link.springer.com/search?facet-creator=%22Arthur+M.+Langer%22" target="_blank" rel="noopener noreferrer">Springer</a>.
        </p>
      </div>

      <div className="articles-section">
        <h2>RESEARCH ARTICLES</h2>

        <ul className="article-list">
          <li>
            "Discovering latent in disadvantaged communities." Youth,
            education and work: exploring new pathways for craftsmanship in a
            globalised world. University of Groningen Press, 2015.
          </li>

          <li>
            "Gen Y Employees: A key asset to accelerate digital transformation
            and competitive advantage in companies." In Reynolds, S. (Ed),
            Generation Y: the Manager and the Company, Grenoble, France:
            University of Grenoble Press, pp. 11-24, 2014.
          </li>

          <li>
            "Employing young talent from underserved populations: Designing
            flexible organizational process for assimilation and productivity"
            Journal of Organization Design (1), 2, pp. 1-17, 2013.
          </li>

          <li>
            "Mentoring nontraditional undergraduate students: A case study in
            higher education" International Journal of Mentoring & Tutoring
            (18): 1, pp. 23-38, 2010.
          </li>

          <li>
            "Measuring and esteem through reflective writing: Essential
            factors in workforce development" Journal of Reflective Practice
            (10): 1, pp. 45-48, 2009.
          </li>

          <li>
            "Adapting to the data explosion: Ensuring justice for all" IEEE
            Transactions on Systems, Man, and Cybernetics, 2009.
          </li>

          <li>
            "Technological Literacy Development in the College Years: A Model
            for Understanding Student Progress" Journal of Theory into
            Practice (47): 185-196, 2008.
          </li>

          <li>
            "The mentoring experience of nontraditional students" NOREA
            Connexions (1): 1, 2008.
          </li>

          <li>
            "Managing technology life cycles using reflective practice."
            Current Issues in Technology Management (2): 9, 1-3, 2005.
          </li>

          <li>
            "Responsive organizational dynamism: Managing technology using
            reflective practice." Reflective Practice (3), 2005.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default AuthorPage;
