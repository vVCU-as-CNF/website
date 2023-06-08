import React from 'react';

const VideoComponent = () => {
  return (
    <div className="row d-flex" style={{marginTop:"3%"}}>
      <div className='col text--center'>
        <h2>Promotional Video</h2>
        <iframe
          width="90%"
          height="350"
          src="https://www.youtube.com/embed/aEB1o1cNU34"
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className='col text--center'>
        <h2>Demonstration Video</h2>
        <iframe
          width="90%"
          height="350"
          src="https://www.youtube.com/embed/ru2GucY1lb0"
          title="Video 2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
