import React from 'react';
import amit from './amit.jpg';

const Podcast = () => {
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000000',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    backgroundColor: '#1DB954',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  };

  const mainStyle = {
    marginTop: '20px',
  };

  const sectionStyle = {
    marginBottom: '30px',
  };

  const h2Style = {
    color: '#1DB954',
  };

  const footerStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    width: '100%',
  };

  const imageStyle = {
    width: '23%', // Adjust the width as needed
    marginBottom: '10px', // Add some margin below the image
  };



  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Latest Experience of working in different companies</h1>
      </header>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2 style={h2Style}>Previous experience and learnings</h2>

          {/* 1st podcast */}

          
          
          <div>
            <img src={amit} alt="" style={imageStyle} />
          </div>
          <div>
            <audio controls> 
              <source src="path/to/your/audio.mp3" type="audio/mp3" />
              
            </audio>
          </div>

          {/* end of 1st podcast */}

          {/* 2nd podcast */}

          <div>
            <img src={amit} alt="" style={imageStyle} />
          </div>
          <div>
            <audio controls> 
              <source src="path/to/your/audio.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </section>
        <section style={sectionStyle}>
          <h2 style={h2Style}>Featured Episodes</h2>

          {/* next set of podcast */}
          
          {/* 1st podcast */}
          <div>
            <img src={amit} alt="" style={imageStyle} />
          </div>
          <div>
            <audio controls>
              <source src="path/to/your/audio.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
          {/* end of 2nd podcast */}

{/* 2nd podcast */}
          <div>
            <img src={amit} alt="" style={imageStyle} />
          </div>
          <div>
            <audio controls>
              <source src="path/to/your/audio.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
          {/* end of 2nd podcast */}

{/* third podcast */}
          <div>
            <img src={amit} alt="" style={imageStyle} />
          </div>
          <div>
            <audio controls>
              <source src="path/to/your/audio.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
          {/* end of third podcast */}
        </section>
      </main>
      <footer style={footerStyle}>
        <p>&copy; 2024 My Podcast App</p>
      </footer>
    </div>
  );
}

export default Podcast;
