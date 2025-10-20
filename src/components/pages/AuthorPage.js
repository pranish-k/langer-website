import React from "react";

const AuthorPage = () => {
  return (
    <div className="page-content">
      <h1>AUTHOR</h1>

      <div className="books-section">
        <h2>RECENT BOOKS</h2>

        <div
          className="book-grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <a
              href="https://link.springer.com/book/10.1007/978-3-031-76212-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-76212-3?as=webp"
                alt="Analysis and Design of Next-Generation Software Architectures 2nd Edition"
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </a>
            <p>
              <strong>
                Analysis and Design of Next-Generation Software Architectures
              </strong>
            </p>
            <p>
              Generative AI, Cybersecurity, and Cloud Computing - 2nd edition
            </p>
            <p>© 2025</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://a.co/d/7j2Hj0d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/81GI1yQshxL._SY522_.jpg"
                alt="Information Technology and Organizational Learning 4th Edition"
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </a>
            <p>
              <strong>
                Information Technology and Organizational Learning
              </strong>
            </p>
            <p>Managing Behavioral Change in the Digital Age - 4th Edition</p>
            <p>© 2024</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://link.springer.com/book/10.1007/978-3-031-26401-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.springernature.com/full/springer-static/cover-hires/book/978-3-031-26401-6"
                alt="Developing a Path to Data Dominance"
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </a>
            <p>
              <strong>Developing a Path to Data Dominance</strong>
            </p>
            <p>
              Forming a Digital Strategy to Drive Revenue Growth (with Arka
              Mukherjee)
            </p>
            <p>© 2023</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://a.co/d/9d3WUhN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/71+d0XFwiOL._SY522_.jpg"
                alt="Analysis and Design of Next-Generation Software Architectures 1st Edition"
                style={{
                  width: "200px",
                  height: "auto",
                  marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </a>
            <p>
              <strong>
                Analysis and Design of Next-Generation Software Architectures
              </strong>
            </p>
            <p>5G, IoT, Blockchain, and Quantum Computing - 1st edition</p>
            <p>© 2020</p>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Dr. Langer's books are available through{" "}
          <a
            href="https://www.amazon.com/s?k=Arthur+M.+Langer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon.com
          </a>{" "}
          and{" "}
          <a
            href="https://link.springer.com/search?facet-creator=%22Arthur+M.+Langer%22"
            target="_blank"
            rel="noopener noreferrer"
          >
            Springer
          </a>
          .
        </p>
      </div>

      <div className="more-books-section">
        <h2>MORE BOOKS</h2>

        <ul className="article-list">
          <li>
            2018 Strategic Information Technology: Best Practices to Drive
            Digital Transformation (2nd Ed.) (with Lyle Yorks). Hoboken: John
            Wiley.
          </li>

          <li>
            2018 Information Technology & Organizational Learning: Managing
            Behavioral Change through Technology and Education (3rd Ed). New
            York: CRC Press
          </li>

          <li>
            2016 Guide to Software Development: Designing & Managing the Life
            Cycle (2nd Ed.). New York: Springer.
          </li>

          <li>
            2013 Strategic IT: Best Practices for IT Managers and Executives
            (with Lyle Yorks). Hoboken: John Wiley.
          </li>

          <li>
            2012 Guide to Software Development: Designing & Managing the Life
            Cycle. New York: Springer-Verlag.
          </li>

          <li>
            2011 Information Technology & Organizational Learning: Managing
            Behavioral Change through Technology and Education (2nd Ed). New
            York: CRC Press
          </li>

          <li>
            2008 Analysis and Design of Information Systems (3rd Ed). New York:
            Springer-Verlag.
          </li>

          <li>
            2006 Information Technology & Organizational Learning: Managing
            Change through Technology and Education. New York: Routledge.
          </li>

          <li>
            2002 Applied Ecommerce: Analysis and Engineering for Ecommerce
            Systems. New York: Wiley.
          </li>

          <li>
            2001 Analysis and Design of Information Systems. New York:
            Springer-Verlag.
          </li>

          <li>1997 The Art of Analysis. New York: Springer-Verlag.</li>

          <li>
            1987 The Facility Coordinator Handbook. New York: Coopers & Lybrand.
          </li>
        </ul>
      </div>

      <div className="articles-section">
        <h2>RESEARCH ARTICLES</h2>

        <ul className="article-list">
          <li>
            2022 "Fantasy and adult education" Journal of Aesthetic Education,
            (56)4, Winter 2022, pp. 47-62
          </li>

          <li>
            2020 "Overview of transformative learning II: real world
            applications" with Anand, T.S., Anand, S.V., Marsick, V.J., and
            Welch, M. Journal of Reflective Practice. (21) 6, pp.744-758.
          </li>

          <li>
            2020 "Overview of transformative learning I: theory and its
            evolution" with Anand, T.S., Anand, S.V., Marsick, V.J., and Welch,
            M. Journal of Reflective Practice. (21) 6, pp.732-743.
          </li>

          <li>
            2017 "Designing the digital organization" with Snow, C.C. and
            Fjeldstad O.D. Journal of Organization Design. pp. 1-13.
          </li>

          <li>
            2016 "Cyber security: The new business priority facing executives."
            Cyber Security Review. Summer 2016, pp. 41-46.
          </li>

          <li>
            2016 "Developing future technology executives at Columbia University
            using formal and informal methods," In Peno, K, Mangiante, ES, and
            Kenahan,R (Eds), Mentoring in formal and informal contexts .
            Charlotte, NC: Information Age Publishing, pp. 281-299.
          </li>

          <li>
            "Discovering talent in disadvantaged communities." Youth, education
            and work: exploring new pathways for craftsmanship in a globalised
            world. University of Groningen Press, 2015.
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
            "Measuring and esteem through reflective writing: Essential factors
            in workforce development" Journal of Reflective Practice (10): 1,
            pp. 45-48, 2009.
          </li>

          <li>
            "Adapting to the data explosion: Ensuring justice for all" IEEE
            Transactions on Systems, Man, and Cybernetics, 2009.
          </li>

          <li>
            "Technological Literacy Development in the College Years: A Model
            for Understanding Student Progress" Journal of Theory into Practice
            (47): 185-196, 2008.
          </li>

          <li>
            "The mentoring experience of nontraditional students" NOREA
            Connexions (1): 1, 2008.
          </li>

          <li>
            "Managing technology life cycles using reflective practice." Current
            Issues in Technology Management (2): 9, 1-3, 2005.
          </li>

          <li>
            "Responsive organizational dynamism: Managing technology using
            reflective practice." Reflective Practice (3), 2005.
          </li>
        </ul>
      </div>

      <div className="industry-articles-section">
        <h2>INDUSTRY ARTICLES</h2>

        <ul className="article-list">
          <li>
            2021 "How Work Has Changed a Year into the Pandemic", Quartz.com,
            April 4, 2021,{" "}
            <a
              href="https://qz.com/work/1991968/how-covid-19-has-changed-how-we-work/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://qz.com/work/1991968/how-covid-19-has-changed-how-we-work/
            </a>
          </li>

          <li>
            2020 "Businesses Must Prioritize Remote Training", HR.com, Dec 22,
            2020,{" "}
            <a
              href="http://design.hr.com/ExcellenceEssentials/TM/2020/DECEMBER/index.html?utm_source=emagazine&utm_campaign=essentials-talentmanagement&utm_content=tmdec2020-epublink&uid=4343676094"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://design.hr.com/ExcellenceEssentials/TM/2020/DECEMBER/index.html?utm_source=emagazine&utm_campaign=essentials-talentmanagement&utm_content=tmdec2020-epublink&uid=4343676094
            </a>
          </li>

          <li>
            2020 "How to Build an Inclusive Digital Economy, and Why We Must",
            Entrepreneur, December 18, 2020,{" "}
            <a
              href="https://www.entrepreneur.com/article/356840"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/356840
            </a>
          </li>

          <li>
            2020 "3 Ways Higher Education Will Need to Adjust to a Post-Crisis
            Landscape", Entrepreneur, August 25, 2018,{" "}
            <a
              href="https://www.entrepreneur.com/article/354864"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/354864
            </a>
          </li>

          <li>
            2020 "Why Strong Leadership Skills Are More Important Now Than
            Ever", Entrepreneur, July 6, 2020,{" "}
            <a
              href="https://www.entrepreneur.com/article/352615"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/352615
            </a>
          </li>

          <li>
            2020 "Lessons from the Pandemic: Step Away from Outsourcing and
            Embrace Local Talent", CEO World, June 4, 2020,{" "}
            <a
              href="https://ceoworld.biz/2020/06/04/lessons-from-the-pandemic-step-away-from-outsourcing-and-embrace-local-talent/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ceoworld.biz/2020/06/04/lessons-from-the-pandemic-step-away-from-outsourcing-and-embrace-local-talent/
            </a>
          </li>

          <li>
            2020 "Seeking Capital? Ask Yourself These 3 Questions First",
            Entrepreneur, April 7, 2020,{" "}
            <a
              href="https://www.entrepreneur.com/article/348539"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/348539
            </a>
          </li>

          <li>
            2020 "How to Keep Your Business Thriving During (and After) the
            Coronavirus", FastCompany.com, March 30, 2020,{" "}
            <a
              href="https://www.fastcompany.com/90483225/how-to-keep-your-business-thriving-during-and-after-the-coronavirus"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fastcompany.com/90483225/how-to-keep-your-business-thriving-during-and-after-the-coronavirus
            </a>
          </li>

          <li>
            2020 "The 3,000-Year-Old Lesson in Executive Mentorship"
            Entrepreneur, February 13, 2020,{" "}
            <a
              href="https://www.entrepreneur.com/article/346216"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/346216
            </a>
          </li>

          <li>
            2019 "Cultivating Talent from Untapped Communities", Area
            Development, December 17th, 2019,{" "}
            <a
              href="https://www.areadevelopment.com/laborEducation/workforce-q4-2019/cultivating-talent-from-untapped-communities.shtml"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.areadevelopment.com/laborEducation/workforce-q4-2019/cultivating-talent-from-untapped-communities.shtml
            </a>
          </li>

          <li>
            2019 "Is Your Organization Making a Difference?", Tlnt, October 25,
            2019,{" "}
            <a
              href="https://www.tlnt.com/is-your-organization-making-a-difference/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/is-your-organization-making-a-difference/
            </a>
          </li>

          <li>
            2019 "The Next Recession is Coming: Is Your Workforce Prepared?" CEO
            Insider, October 16, 2019,{" "}
            <a
              href="https://ceoworld.biz/2019/10/16/the-next-recession-is-coming-is-your-workforce-prepared/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ceoworld.biz/2019/10/16/the-next-recession-is-coming-is-your-workforce-prepared/
            </a>
          </li>

          <li>
            2019 "Manufacturing's Talent Shortage Is an Image Problem", Tlnt,
            October 4, 2019,{" "}
            <a
              href="https://www.tlnt.com/manufacturings-talent-shortage-is-an-image-problem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/manufacturings-talent-shortage-is-an-image-problem/
            </a>
          </li>

          <li>
            2019 "Don't Just Hire a Veteran, Support Them", Tlnt, July 25, 2019,{" "}
            <a
              href="https://www.tlnt.com/dont-just-hire-a-veteran-support-them/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/dont-just-hire-a-veteran-support-them/
            </a>
          </li>

          <li>
            2019 "3 Reasons Aspiring Executives Need a Degree in Tech
            Management", Entrepreneur, July 23, 2019.{" "}
            <a
              href="https://www.entrepreneur.com/article/331575"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/331575
            </a>
          </li>

          <li>
            2019 "Amazon Deal's Collapse Shows the Work Big Tech Must Do in
            NYC", CityLimits.org, May 21, 2019,{" "}
            <a
              href="https://citylimits.org/2019/05/21/opinion-amazon-deals-collapse-shows-the-work-big-tech-must-do-in-nyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://citylimits.org/2019/05/21/opinion-amazon-deals-collapse-shows-the-work-big-tech-must-do-in-nyc/
            </a>
          </li>

          <li>
            2019 "3 reasons aspiring executives need a degree in tech
            management", TheLadders.com, May 6th, 2019,{" "}
            <a
              href="https://www.theladders.com/career-advice/3-reasons-aspiring-executives-need-a-degree-in-tech-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.theladders.com/career-advice/3-reasons-aspiring-executives-need-a-degree-in-tech-management
            </a>
          </li>

          <li>
            2019 "Big Tech Can Do Good and Do Well at the Same Time",
            Entrepreneur, March 13, 2019,{" "}
            <a
              href="https://www.entrepreneur.com/article/328936"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.entrepreneur.com/article/328936
            </a>
          </li>

          <li>
            2019 "Partnerships with Purpose", LinkedIn, February 6, 2019,{" "}
            <a
              href="https://www.linkedin.com/pulse/partnerships-purpose-arthur-langer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/pulse/partnerships-purpose-arthur-langer/
            </a>
          </li>

          <li>
            2019 "3 Ways Companies Can Inspire Inclusivity and Remove
            Unconscious Bias", Next Concept HR Magazine, January 24, 2019,{" "}
            <a
              href="http://nextconcepthrmagazine.com/remove-unconscious-bias%e2%80%a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://nextconcepthrmagazine.com/remove-unconscious-bias%e2%80%a8/
            </a>
            .
          </li>

          <li>
            2019 "Near-Sourcing for IT is Gaining Momentum", TLNT, January 19,
            2019{" "}
            <a
              href="https://www.tlnt.com/near-sourcing-for-it-is-gaining-momentum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/near-sourcing-for-it-is-gaining-momentum/
            </a>
            .
          </li>

          <li>
            2019 "U.S. Economic Recovery Hasn't Reached Those Living in Poverty.
            How Can We Change That?", Training Industry, January 18, 2019,{" "}
            <a
              href="https://trainingindustry.com/blog/workforce-development/u-s-economic-recovery-hasnt-reached-those-living-in-poverty-how-can-we-change-that/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://trainingindustry.com/blog/workforce-development/u-s-economic-recovery-hasnt-reached-those-living-in-poverty-how-can-we-change-that/
            </a>
            .
          </li>

          <li>
            2018 "Corporate Social Responsibility Programs Make the Spirit of
            the Season Last All Year", TLNT, December 11, 2018,{" "}
            <a
              href="https://www.tlnt.com/corporate-social-responsibility-programs-make-the-spirit-of-the-season-last-all-year/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/corporate-social-responsibility-programs-make-the-spirit-of-the-season-last-all-year/
            </a>
            .
          </li>

          <li>
            2018 "Tech Takeover: Amazon's 'Innovative and Peculiar' Culture
            Could Shake Up Nashville", Tennessean, December 4, 2018,{" "}
            <a
              href="https://amp.tennessean.com/amp/2056709002"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://amp.tennessean.com/amp/2056709002
            </a>
            .
          </li>

          <li>
            2018 "Dr. Art Langer in Idea Mensch", Idea Mensch, November 16,
            2018,{" "}
            <a
              href="https://ideamensch.com/arthur-langer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ideamensch.com/arthur-langer/
            </a>
            .
          </li>

          <li>
            2018 "What Amazon Must Bring to Long Island City: A Laser Focus on
            Creating Opportunities for Working Class New Yorkers.", NY Daily
            News, November 13, 2018,{" "}
            <a
              href="https://www.nydailynews.com/opinion/ny-oped-what-amazon-must-bring-to-long-island-city-20181113-story.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.nydailynews.com/opinion/ny-oped-what-amazon-must-bring-to-long-island-city-20181113-story.html
            </a>
            .
          </li>

          <li>
            2018 "Alternative Training Programs Help Improve Diversity
            Opportunities", TLNT, November 12, 2018,{" "}
            <a
              href="https://www.tlnt.com/alternative-training-programs-help-improve-diversity-opportunities/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tlnt.com/alternative-training-programs-help-improve-diversity-opportunities/
            </a>
            .
          </li>

          <li>
            2018 "Bridging the IT Talent Gap: Find Scarce Experts",
            InformationWeek, October 24, 2018,{" "}
            <a
              href="https://www.informationweek.com/strategic-cio/team-building-and-staffing/bridging-the-it-talent-gap-find-scarce-experts/a/d-id/1333109"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.informationweek.com/strategic-cio/team-building-and-staffing/bridging-the-it-talent-gap-find-scarce-experts/a/d-id/1333109
            </a>
          </li>

          <li>
            2018 "Four Ways Diversity Will Save the Construction Industry",
            Construction Executive, October 12, 2018,{" "}
            <a
              href="http://constructionexec.com/article/four-ways-diversity-will-save-the-construction-industry?utm_campaign=6dd49f1d6c&utm_medium=email&utm_source=ce_this_week&utm_content=volume_1_issue_39&utm_term=ce_announcements&mc_unique_id=3ea22ae8cc&aid=3993"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://constructionexec.com/article/four-ways-diversity-will-save-the-construction-industry?utm_campaign=6dd49f1d6c&utm_medium=email&utm_source=ce_this_week&utm_content=volume_1_issue_39&utm_term=ce_announcements&mc_unique_id=3ea22ae8cc&aid=3993
            </a>
            .
          </li>

          <li>
            2018 "How Corporations Can Thrive Despite the Skilled Labor
            Shortage", Recruiter Today, October 11, 2018,{" "}
            <a
              href="https://www.recruiter.com/i/how-corporations-can-thrive-despite-the-skilled-labor-shortage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.recruiter.com/i/how-corporations-can-thrive-despite-the-skilled-labor-shortage/
            </a>
            .
          </li>

          <li>
            2018 "3 Ways Your Company Can Integrate Multiple Generations and
            Engage Millennials", Entrepreneur, September 20, 2018,{" "}
            <a
              href="https://www.wforce.org/news/3-ways-your-company-can-integrate-multiple-generations-and-engage-millennials"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/3-ways-your-company-can-integrate-multiple-generations-and-engage-millennials
            </a>
            .
          </li>

          <li>
            2018 "How Diversity Can Help Create a More Innovative Workforce",
            Authority Magazine, September 18, 2018,{" "}
            <a
              href="https://www.wforce.org/news/how-diversity-can-help-create-a-more-innovative-workforce"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/how-diversity-can-help-create-a-more-innovative-workforce
            </a>
            .
          </li>

          <li>
            2018 "Why Construction Companies Need to Hire Women", Construction
            Executive, September 14, 2018,{" "}
            <a
              href="https://www.wforce.org/news/why-construction-companies-need-to-hire-women"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/why-construction-companies-need-to-hire-women
            </a>
            .
          </li>

          <li>
            2018 "Short-Term Unemployment Takes a Greater Mental Toll on Black
            Americans Than on Whites. Why and How Do We Change That?", September
            5, 2018,{" "}
            <a
              href="https://www.wforce.org/news/short-term-unemployment-takes-a-greater-mental-toll-on-black-americans-than-on-whites-why-and-how-do-we-change-that"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/short-term-unemployment-takes-a-greater-mental-toll-on-black-americans-than-on-whites-why-and-how-do-we-change-that
            </a>
            .
          </li>

          <li>
            2018 "Despite Women's Equality Day, Women's Wages Still Lag",
            Tennessee Tribune, August 16, 2018,{" "}
            <a
              href="https://www.wforce.org/news/despite-womens-equality-day-womens-wages-still-lag"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/despite-womens-equality-day-womens-wages-still-lag
            </a>
            .
          </li>

          <li>
            2018 "When It Takes Twice the Time to Earn the Same Dollar How Can
            Black Women Break the Glass Ceiling?", Workforce Opportunity
            Services, August 7, 2018,{" "}
            <a
              href="https://www.wforce.org/news/black-women-equal-pay-day"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/black-women-equal-pay-day
            </a>
            .
          </li>

          <li>
            2018 "Celebrating Women Equality", Workforce Opportunity Services,
            August 2, 2018,{" "}
            <a
              href="https://www.wforce.org/news/celebrating-women-equality"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/celebrating-women-equality
            </a>
            .
          </li>

          <li>
            2018 "Digital Transformation: A Cheat Sheet", TechRepublic, August
            2, 2018,{" "}
            <a
              href="https://www.techrepublic.com/article/digital-transformation-a-cheat-sheet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.techrepublic.com/article/digital-transformation-a-cheat-sheet/
            </a>
            .
          </li>

          <li>
            2018 "Commentary: Let's Honor Veterans with Jobs, Not Just Salutes",
            Military Times, July 24, 2018,{" "}
            <a
              href="https://rebootcamp.militarytimes.com/news/employment/2018/07/24/commentary-lets-honor-veterans-with-jobs-not-just-salutes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rebootcamp.militarytimes.com/news/employment/2018/07/24/commentary-lets-honor-veterans-with-jobs-not-just-salutes/
            </a>
            .
          </li>

          <li>
            2018 "Workforce Opportunity Services Works to Break the Cycle of
            Unemployment", Home News Tribune, July 19, 2018{" "}
            <a
              href="https://www.mycentraljersey.com/story/money/business/2018/07/19/workforce-opportunity-services-unemployment-jobs/759970002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mycentraljersey.com/story/money/business/2018/07/19/workforce-opportunity-services-unemployment-jobs/759970002/
            </a>
          </li>

          <li>
            2018 "Job Placement Program Benefits Veterans and Military Spouses",
            Fort Bliss Bugle, July 18, 2018,{" "}
            <a
              href="http://fortblissbugle.com/2018/07/18/job-placement-program-benefits-veterans-and-military-spouses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://fortblissbugle.com/2018/07/18/job-placement-program-benefits-veterans-and-military-spouses/
            </a>
            .
          </li>

          <li>
            2018 "Workforce Nonprofit Assists Underserved, Veterans", NJBIZ,
            July 9, 2018,{" "}
            <a
              href="https://www.wforce.org/news/workforce-nonprofit-assists-underserved-veterans"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/workforce-nonprofit-assists-underserved-veterans
            </a>
          </li>

          <li>
            2018 "Ways Companies Are Finding – and Retaining – Key Personnel in
            a Tight Labor Market", Forbes Sun Trust, June 26, 2018{" "}
            <a
              href="https://www.forbes.com/sites/suntrust/2018/06/26/5-ways-companies-are-finding--and-retaining--key-personnel-in-a-tight-labor-market/#1fb551439527"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.forbes.com/sites/suntrust/2018/06/26/5-ways-companies-are-finding--and-retaining--key-personnel-in-a-tight-labor-market/#1fb551439527
            </a>
            .
          </li>

          <li>
            2018 "This Man Took Advantage of a Big Opportunity – Now He's Giving
            Others the Same Chance He Got", Epoch Times, June14, 2018,{" "}
            <a
              href="https://www.theepochtimes.com/uplift/this-man-took-advantage-of-a-big-opportunity-now-hes-giving-others-the-same-chance-he-got_2550237.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.theepochtimes.com/uplift/this-man-took-advantage-of-a-big-opportunity-now-hes-giving-others-the-same-chance-he-got_2550237.html
            </a>
            .
          </li>

          <li>
            2018 "The Power of Education", Workforce Opportunity Services, June
            5, 2018,{" "}
            <a
              href="https://www.wforce.org/news/the-power-of-education"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/the-power-of-education
            </a>
            .
          </li>

          <li>
            2018 "Veterans Find Successful Careers at Covanta", Waste 360, May
            25, 2018,{" "}
            <a
              href="http://www.waste360.com/business-operations/veterans-find-successful-careers-covanta"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.waste360.com/business-operations/veterans-find-successful-careers-covanta
            </a>
            .
          </li>

          <li>
            2018 "City-Based Nonprofit Tackles Veteran, Underserved
            Unemployment", Metro New York, May 24, 2018,{" "}
            <a
              href="https://www.metro.us/news/local-news/new-york/workforce-opportunity-services-systemic-change-veteran-unemployment"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.metro.us/news/local-news/new-york/workforce-opportunity-services-systemic-change-veteran-unemployment
            </a>
            .
          </li>

          <li>
            2018 "Close the Opportunity Gap: True Diversity in the Workplace
            Won't Happen Until You Do", Nutanix NEXT Magazine, May 9, 2018,{" "}
            <a
              href="https://www.wforce.org/news/close-the-opportunity-gap-true-diversity-in-the-workplace-wont-happen-until-you-do"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/close-the-opportunity-gap-true-diversity-in-the-workplace-wont-happen-until-you-do
            </a>
            .
          </li>

          <li>
            2018 "Beyond Lip Service: Developing Meaningful Diversity and
            Inclusion Efforts in the Workplace", 30SecondsToFly, April 10, 2018,{" "}
            <a
              href="https://www.wforce.org/wos/news/beyond-lip-service-developing-meaningful-diversity-and-inclusion-efforts-in-the-workplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/wos/news/beyond-lip-service-developing-meaningful-diversity-and-inclusion-efforts-in-the-workplace
            </a>
            .
          </li>

          <li>
            2018 "Excel Scholars Program Fireside Chat: Dr. Arthur Langer", West
            Point Excel Program, March 26, 2018,{" "}
            <a
              href="https://www.wforce.org/news/excel-scholars-program-fireside-chat-dr-arthur-langer-21-february-2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/excel-scholars-program-fireside-chat-dr-arthur-langer-21-february-2018
            </a>
            .
          </li>

          <li>
            2018 "Dr. Art Langer to Deliver Keynote Address at the American
            Automobile Association's National CIO Forum", AAA Conference, March
            22, 2018,{" "}
            <a
              href="https://www.wforce.org/news/dr-art-langer-to-deliver-keynote-address-at-the-american-automobile-association-s-national-cio-forum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wforce.org/news/dr-art-langer-to-deliver-keynote-address-at-the-american-automobile-association-s-national-cio-forum
            </a>
            .
          </li>

          <li>
            2018 "Digital Disruption is Feeding the Consumer Revolution",
            Comm-Works Blog, March 21, 2018,{" "}
            <a
              href="https://www.comm-works.com/digital-disruption-feeding-consumer-revolution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.comm-works.com/digital-disruption-feeding-consumer-revolution/
            </a>
            .
          </li>

          <li>
            2018 "Workforce Opportunity Services is Working to Close the Gender
            Gap", PR Newswire, March 7, 2018{" "}
            <a
              href="https://www.prnewswire.com/news-releases/workforce-opportunity-services-is-working-to-close-the-gender-gap-300609703.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.prnewswire.com/news-releases/workforce-opportunity-services-is-working-to-close-the-gender-gap-300609703.html
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorPage;
