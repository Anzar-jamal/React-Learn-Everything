import React from 'react';
import Card from './components/Card'; 
import data from './data'; // Import your data array

const App = () => {
  return (
    <div className='parent' >
      
      {data.map((elem,idx) => {
        
        return (
          <div key={idx}>

            <Card 
            key={idx} // Always use a unique key when mapping
            logo={elem.logo}
            company={elem.company}
            postedAgo={elem.postedAgo}
            title={elem.title}
            jobType={elem.jobType}
            level={elem.level} 
            salary={elem.salary}
            location={elem.location}
          />
          </div>
        )
      })}

    </div>
  );
};

export default App;