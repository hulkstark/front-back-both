import React, { useState } from 'react';
import google from './google.png'; // Replace with your local image path
import doodle from './doodle.png'; // Replace with your local image path
import doted from './doted.png'; // Replace with your local image path
import voiceIcon from './voice.png'; // Replace with your local voice icon path
import searchByImageIcon from './searchbyim.png'; // Replace with your local search by image icon path

const inputContainerStyle = {
  position: 'relative',
  marginBottom: '20px',
};

const inputStyle = {
  width: '41%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '52px',
  paddingRight: '50px',
  marginLeft: '-3px'
};

const iconStyle = {
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  display: 'flex',
};

const iconImageStyle = {
  height: '32px',
  marginRight: '573px',
};

const iconImageStyle1 = {
  height: '23px',
  marginRight: '4px',
};

const secondImageStyle = {
  width: '100%', // Make the image responsive
  maxWidth: '129px', // Set a maximum width for larger screens
  height: 'auto', // Maintain the aspect ratio
  cursor: 'pointer',
  marginBottom: '3px',
  marginLeft: '59px',
  padding: '0px'
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const searchQuery = event.target.q.value.toLowerCase();

  if (searchQuery.includes('amit')) {
    window.location.href = '../serps';
  } else {
    alert("Please don't forget my name");
  }
};

const ImageCollagePage = () => {
  const imageCollages = [
    {
      id: 1,
      images: [google, doodle, doted, google, doodle],
    },
    {
      id: 2,
      images: [google, doodle, doted, google, doodle],
    },
    {
      id: 3,
      images: [google, doodle, doted, google, doodle],
    },
    // Add more collages as needed
  ];

  const initialStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    transition: 'transform 0.3s, border 0.3s',
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  const getStyle = (index) => {
    return index === hoveredIndex
      ? {
          ...initialStyle,
          transform: 'scale(1.1)',
          border: '2px solid #4285f4',
        }
      : { ...initialStyle };
  };

  return (
    <div >
      
      <form onSubmit={handleFormSubmit} style={inputContainerStyle}>
      <img src={google} alt="Google Image" style={secondImageStyle} />
        <input
          type="text"
          style={inputStyle}
          name="q"
          placeholder="Type my name, you know, right?"
        />
        <span style={iconStyle}>
          <img src={voiceIcon} alt="Voice Icon" style={iconImageStyle1} />
          <img
            src={searchByImageIcon}
            alt="Search by Image Icon"
            style={iconImageStyle}
          />
        </span>
      </form>
      

      {imageCollages.map((collage) => (
        <div key={collage.id} style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {collage.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={getStyle(index)}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      ))}

      {previewImage && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999',
          }}
          onClick={handleClosePreview}
        >
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCollagePage;
