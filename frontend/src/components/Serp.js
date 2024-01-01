import React from 'react';
import GoogleHome from './Googlehome';
import google from './google.png';
import searchByImageIcon from './searchbyim.png';
import voiceIcon from './voice.png';
import doodle from './doodle.png'

const AdditionalInfoBox = ({ title, description, imageUrl }) => {
  const boxStyle = {
    maxWidth: '718px',
    width: '39%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '40px',
    marginLeft: '20px', // Adjust the margin as needed
    marginBottom: "393px"
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#545454',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '10px', // Adjust the margin as needed
    marginLeft: "-43px"
  };

  return (
    <div style={boxStyle}>
      {imageUrl && <img src={doodle} alt="Additional Info" style={imageStyle} />}
      <div style={titleStyle}>{title}</div>
      <div style={descriptionStyle}>{description}</div>
      
    </div>
  );
};

const SearchResultCard = ({ title, description }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#545454',
  };

  const linkStyle = {
    color: '#1a0dab',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={descriptionStyle}>{description}</div>
      <a href="#" style={linkStyle} onMouseOver={(e) => (e.target.style = linkHoverStyle)} onMouseOut={(e) => (e.target.style = linkStyle)}>
        Read more
      </a>
    </div>
  );
};

const SearchResultsPage = () => {
  const results = [
    {
      title: 'Intro - Amit Singh Rawat',
      description: 'This is a description for Example Title 1. It provides additional information about the result.',
    },
    {
      title: 'What are my skills',
      description: 'This is a description for Example Title 3. It provides additional information about the result.',
    },
    {
      title: 'My Resume',
      description: 'This is a description for Example Title 2. It provides additional information about the result.',
    },
    {
      title: 'The Cover Letter',
      description: 'This is a description for Example Title 3. It provides additional information about the result.',
    },
    {
      title: 'Podcast - Explaining my professional Journey',
      description: 'This is a description for Example Title 3. It provides additional information about the result.',
    },
  ];

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const inputContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const boxStyle = {
    maxWidth: '718px',
    width: '48%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '40px',
    position: 'relative',
  };

  const secondImageStyle = {
    position: 'absolute',
    top: '2%',
    left: '8%',
    maxWidth: '13%',
  };

  const rightBoxStyle = {
    maxWidth: '300px',
    width: '48%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '40px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 16px 1px 18px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '52px',
    paddingRight: '50px',
    marginLeft: '113px',
    marginRight: '29px',
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    cursor: 'pointer',
  };

  const iconImageStyle = {
    height: '32px',
    marginRight: '19px',
  };

  const iconImageStyle1 = {
    height: '23px',
    marginRight: '4px',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img src={google} alt="Google Image" style={secondImageStyle} />
        <form action="https://www.google.com/search" method="GET">
          <div style={inputContainerStyle}>
            <input
              type="text"
              style={inputStyle}
              name="q"
              placeholder="Type my name..."
            />
            <span style={iconStyle}>
              <img
                src={voiceIcon}
                alt="Voice Icon"
                style={iconImageStyle1}
              />
              <img
                src={searchByImageIcon}
                alt="Search by Image Icon"
                style={iconImageStyle}
              />
            </span>
          </div>
        </form>
        <div style={pageStyle}>
          {results.map((result, index) => (
            <SearchResultCard key={index} title={result.title} description={result.description} />
          ))}
        </div>
      </div>
      <AdditionalInfoBox
      imageUrl="URL_TO_YOUR_IMAGE"
        title="Amit Singh Rawat"
        description="Amit has an experience of over 7 years of working with top companies. Here is the skillset - Digital Marketing - Ads operations, Google Analytics, Google Data Studio & GTM.
      
        My technical expertise extends to front-end development, where I have proficiency in HTML, CSS, JavaScript, React.js, and Bootstrap. Additionally, I possess working knowledge of Node.js and MongoDB, although not in the implementation phase. This dual skill set enables me to bridge the gap between marketing and technology, facilitating effective communication between different teams. "
        
        
      />
    </div>
  );
};

export default SearchResultsPage;
