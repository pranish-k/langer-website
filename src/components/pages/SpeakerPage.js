import React, { useState } from "react";

const SpeakerPage = () => {
  const [selectedVideo, setSelectedVideo] = useState("6Yo5W0h2Vac");

  const videos = [
    {
      id: "6Yo5W0h2Vac",
      title: "AI in times of 6G: Interview with Prof. Art Langer, Northeastern University | KI in Zeiten von 6G"
    },
    {
      id: "MmfLCmaCWhU",
      title: "Analysis and Design of Next Generation Software Architecture - Dr. Art Langer"
    },
    {
      id: "zzp46Is1mls",
      title: "Art Langer Interview | Careers in the Digital Age with Karyn Schoenbart"
    },
    {
      id: "faS10CGXIaA",
      title: "Dr. Art Langer, Columbia University - #nextconf - Nutanix .Next Europe - #theCUBE"
    },
    {
      id: "NXX91lr_xRA",
      title: "Art Langer: How do CIOs get ready for the 6G age?"
    },
    {
      id: "2DwJFY34_yY",
      title: "TEDxTeachersCollege | Creating employment opportunities for under-served youth | Arthur Langer"
    }
  ];

  return (
    <div className="page-content">
      <h1>SPEAKER</h1>

      <div className="speaker-videos">
        <h2>WATCH ON YOUTUBE</h2>

        <div className="video-player-container">
          <div className="video-player">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-list">
            <h3>Select a Video:</h3>
            <ul>
              {videos.map((video) => (
                <li
                  key={video.id}
                  className={selectedVideo === video.id ? "active" : ""}
                  onClick={() => setSelectedVideo(video.id)}
                  style={{ cursor: "pointer" }}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="presentations-section">
        <h2>RECENT CONFERENCE PRESENTATIONS</h2>

        <ul className="presentation-list">
          <li>
            2025 "Cybersecurity Leadership Challenges." Asia Pacific Japan. February 19, 2025.
          </li>

          <li>
            2025 "The impact of AI on Cybersecurity." January 22, 2025.
          </li>

          <li>
            2024 "Digital Disruption for Healthcare." October 17, 2024.
          </li>

          <li>
            2024 "Attracting & Retaining Talent for Americas." July 17, 2024.
          </li>

          <li>
            2024 "AI for Americas Channel Partners for Nutanix." May 22, 2024.
          </li>

          <li>
            2024 "Talent Acquisition/Retention for EMEA." May 16, 2024.
          </li>

          <li>
            2024 "The Fantasy Development Arc as a Reflective Learning Tool." The Future of Humanities: Reflective Practices in the Age of AI Conference. May 3-4, London.
          </li>

          <li>
            2024 "Digital Sustainability." March 13, 2024.
          </li>

          <li>
            2024 "AI for Australia, New Zealand, Asia, Southeast Asia." February 28, 2024.
          </li>

          <li>
            2024 "AI in Europe, Middle East, Africa." January 18, 2024.
          </li>

          <li>
            2023 "Cybersecurity Issues in Africa." Nigeria, November 29, 2023.
          </li>

          <li>
            2023 "AI in the East." APJ, November 11, 2023.
          </li>

          <li>
            2023 "AI and Future Employment." Spark Executive Forum. New York, November 8, 2023
          </li>

          <li>
            2023 "Cybersecurity and Data Aggregation." EMEA, October 17, 2023.
          </li>

          <li>
            2023 "Digital Sustainability and India." September 28, 2023.
          </li>

          <li>
            2023 "Cybersecurity and AI." APJ, September 19, 2023.
          </li>

          <li>
            2023 "Future of Work." American Express Conference, July 11, 2023.
          </li>

          <li>
            2023 "Digital Sustainability." Middle East and Dubai. June 20, 2023.
          </li>

          <li>
            2023 "Woman Serving on a Board" Woman in Technology, June 14, 2023.
          </li>

          <li>
            2023 "Transformational Leadership" EMEA, June 13, 2023.
          </li>

          <li>
            2023 "Future of Work." American Express conference, May 30, 2023
          </li>

          <li>
            2023 "Building Sustainability at Scale." Spark Executive Forum: Napa Valley, CA, April 27, 2023.
          </li>

          <li>
            2023 "Global Sustainability." Webinar Presentation: Nutanix, April 24, 2023
          </li>

          <li>
            2023 "Serving on Boards." Webinar Presentation: EMEA, March 8, 2023
          </li>

          <li>
            2023 "Future of Work." Webinar Presentation: Deutsche Bank, February 22, 2023
          </li>

          <li>
            2023 "Future of Work." Webinar Presentation: AMS, January 25, 2023
          </li>

          <li>
            2023 "Digital Disruption." Webinar Presentation: Financial Services, January 12, 2023
          </li>

          <li>
            2022 "Data Science Strategy." Webinar Presentation: AMS/EMEA, November 29, 2022
          </li>

          <li>
            2022 "Sustainability." Webinar Presentation: Deutsche Bank, October 19, 2022
          </li>

          <li>
            2022 "Digital Sustainability." Webinar Presentation: EMEA & Americas, October 18, 2022
          </li>

          <li>
            2022 "Transformational Leadership." Webinar Presentation: South Africa, July 21, 2022
          </li>

          <li>
            2022 "Digital Sustainability." Webinar Presentation: Americas, July 20, 2022
          </li>

          <li>
            2022 "Cybersecurity Leadership." Webinar Presentation: American Public Sector, July 13, 2022
          </li>

          <li>
            2022 "Digital Disruption." Webinar Presentation: Accenture Conference, July 7, 2022
          </li>

          <li>
            2022 "Cybersecurity Strategy." Webinar Presentation: EMEA, June 8, 2022
          </li>

          <li>
            2022 "Future of Workforce." McKinsey NY Talent Leaders Conference, New York City, May 19, 2022
          </li>

          <li>
            2022 "Serving on a Board." Webinar Presentation: EU, May 5, 2022
          </li>

          <li>
            2022 "Data Science Strategy." Webinar Presentation: Deutsche Bank, April 7, 2022
          </li>

          <li>
            2022 "Digital Sobriety." Webinar Presentation: EMEA, April 6, 2022
          </li>
        </ul>
      </div>

      <div className="university-presentations">
        <h2>UNIVERSITY PRESENTATIONS AND EVENTS</h2>

        <ul>
          <li>
            "Systemic Solutions for Lasting Change," 2014 TEDx Teachers
            College, New York, March 28, 2014.
          </li>
          <li>
            "Future of Learning," Columbia University Business School Learning
            Forum, New York, NY, March 1, 2013
          </li>
          <li>
            "Research on Workforce Developments in the United States,"
            University of Groningen, Groningen, Netherlands, May, 2012
          </li>
          <li>
            "Lifelong Learning and Higher Education in a Globalized Context,"
            Conference on Lifelong Learning & Exclusion, University of
            Groningen, Groningen, Netherlands, May, 2012
          </li>
          <li>
            "Higher Education: Past, Present and Future," 2012 Academic
            Managers of Princeton (AMG) Conference, Princeton University,
            Princeton, NJ, June 21, 2012
          </li>
          <li>
            "Social Exclusion and Workforce Diversity," University of
            Groningen, Netherlands, November 3, 2010
          </li>
          <li>
            "Should Centers Emphasize Outreach" Global Consortium of
            Entrepreneurship Centers Conference, Penn State University,
            October 21-23, 2010
          </li>
          <li>
            "Workforce Diversity: Examining alternative sources from Local
            Communities" 14th Annual Wharton Leadership Conference,
            Philadelphia, PA, June 2010
          </li>
        </ul>
      </div>

      <div className="speaking-topics">
        <h2>SPEAKING TOPICS</h2>
        <p>
          Dr. Langer is a recognized speaker and authority on the topics
          mentioned above and in the following areas:
        </p>
        <ul>
          <li>Technology Management and Leadership</li>
          <li>Workforce Development and Diversity</li>
          <li>Adult Learning and Mentoring</li>
          <li>Organizational Learning</li>
        </ul>
        <p>
          Dr. Langer frequently presents to corporations, at business and
          professional events, and at meetings and conferences. Please contact
          him about presenting for you.
        </p>
      </div>
    </div>
  );
};

export default SpeakerPage;
