import React from 'react';

const VideoComponent = () => {
  return (
    <div style={{ width: '100%', display: 'flex', margin: '5% 0px' }}>
      <div style={{ flex: 1, margin: '0px 2.5% 0px 10%', width: '50' }}>
        <h2 style={{ textAlign:"center" }}>Promotional Video</h2>
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/aEB1o1cNU34"
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ flex: 1, margin: '0px 10% 0px 2.5%', width: '50' }}>
        <h2 style={{ textAlign:"center" }}>Demonstration Video</h2>
        <iframe
          width="100%"
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
