import React from 'react';
import introv from './introv.mp4'; // Adjust the path accordingly

const Intro = () => {
  return (
    <div>
      
      <video width="85%" height="auto" controls>
        <source src={introv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Intro;
