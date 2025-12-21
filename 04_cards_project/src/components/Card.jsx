import React from 'react';
import { Bookmark } from 'lucide-react';

const Card = ({ logo, company, postedAgo, title, jobType, level, salary, location }) => {
  return (
    <div className="card">
      
      {/* top section */}
      <div className="top">
        <img src={logo} alt={`${company} logo`} />
        <button>
          save <Bookmark size={15} />
        </button>
      </div>

      {/* center section */}
      <div className="center">
        <h3>
          {company} <span>{postedAgo}</span>
        </h3>
        <h2>{title}</h2>
        <div className="tags">
          <h4 className="tag">{jobType}</h4>
          <h4 className="tag">{level}</h4>
        </div>
      </div>

      {/* bottom section */}
      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
      
    </div>
  );
};

export default Card;