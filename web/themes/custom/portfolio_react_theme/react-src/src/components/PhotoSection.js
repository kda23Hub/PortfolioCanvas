import React from 'react';

const PhotoSection = () => {
  return (
    <div className="photo-section">
      <img src={process.env.PUBLIC_URL + '/photo.jpeg'} alt="Your Photo" />
    </div>
  );
};

export default PhotoSection;
