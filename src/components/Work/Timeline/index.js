import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'Aug 2024 -- Present',
      title: 'Delta Air Lines',
      description: [
        'Developed automated reports and analyses using <b>Python</b>, <b>SQL</b>, and <b>SAS</b>, directly supporting senior divisional leaders and business units.',
        'Enhanced data accessibility by expanding the star-schema data warehouse model and implementing automated <b>ETL</b> processes, improving efficiency for fleet corrective action requests.',
        'Created executive-level dashboards with <b>Tableau</b>, enabling data-driven decision-making across various organizational levels.',
      ],
      expanded: false,
    },
    {
      date: 'June 2024 -- Present',
      title: 'LG Uplus',
      description: [
        'Developed and maintained the front end of a dog owner community app using <b>Next.js</b> and <b>TypeScript</b>, resulting in a <b>25%</b> increase in user engagement through improved UI/UX design and performance optimization.',
        'Implemented responsive design and dynamic content loading with <b>Emotion</b> and <b>Recoil</b>, leading to a <b>20%</b> reduction in page load times and enhancing the overall user experience.',
        'Introduced infinite scrolling and image upload features, leveraging <b>TanStack Query</b> for efficient data fetching and a more interactive user experience.',
      ],
      expanded: false,
    },
    {
      date: 'Mar 2024 -- Present',
      title: 'Radical AI',
      description: [
        'Developed and launched ReX, an AI-powered career coaching platform, utilizing <b>OpenAI</b>, <b>Firebase</b>, <b>Node.js</b>, and <b>React</b>, which resulted in a <b>40%</b> increase in user engagement.',
        'Integrated OpenAI\'s GPT technology with <b>Firebase</b> to automate personalized career guidance, achieving a <b>25%</b> improvement in user satisfaction scores by offering tailored advice and support.',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
