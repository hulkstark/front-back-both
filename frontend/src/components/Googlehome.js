import { useState } from 'react';
import doodle from './doodle.png';
import google from './google.png';
import searchByImageIcon from './searchbyim.png';
import voiceIcon from './voice.png';
import doted from './doted.png';
import gicon from './gicon.png';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import skillsicon from './skillsicon.png';
import introicon from './introicon.png';
import podcasticon from './podcasticon.png'
import recruiters from './recruiters.png'




const ProfileLinksBox = ({ handleClose }) => {
  // Define your profile links with icons and descriptions here
  const profileLinks = [
    { name: 'My Intro', icon: introicon, description: 'Let us start with a quick intro.', link: '/intro' },
    { name: 'My Skills', icon: skillsicon, description: 'My skills at a glance.', link: '/skills' },
    { name: 'My Podcast', icon: podcasticon, description: 'My 7+ years industry experience explained.', link: '/podcast' }
    ,
    // Add more links as needed
  ];


  const iconimage1 = {
    height: '32px', // Adjust the height as needed
    marginRight: '8px',
  };
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
      {profileLinks.map((profileLink, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <img src={profileLink.icon} alt={`Icon for ${profileLink.name}`} style={iconimage1} />
          <div>
            <a href={profileLink.link}>{profileLink.name}</a>
            <p>{profileLink.description}</p>
          </div>
        </div>
      ))}
      
      <button onClick={handleClose} type="button" class="btn btn-primary">Close</button>
    </div>
  );
};

const SignupLinksBox = ({ handleClose, isAuthenticated, handleLogout }) => {
  // Define your profile links with icons and descriptions here
  const signupLinks = [
    { name: 'Hello Recruiters', icon: recruiters, description: 'If it is required, you can register here and share your contact details'}
    // Add more links as needed
  ];


  const iconimage2 = {
    height: '32px', // Adjust the height as needed
    marginRight: '8px',
  };

  
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
      {signupLinks.map((signupLink, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <img src={signupLink.icon} alt={`Icon for ${signupLink.name}`} style={iconimage2} />
          <div>
            <a href={signupLink.link}>{signupLink.name}</a>
            <p>{signupLink.description}</p>
           
          </div>
        </div>
      ))}
      
      <button onClick={handleClose} type="button" class="btn btn-primary" style = {{marginLeft: '10px'}}>Close</button>
      {isAuthenticated ? (
              <button onClick={handleLogout} type="button" className="btn btn-primary" style={{ marginLeft: '10px' }}>
                Logout
              </button>
            ) : (
              <button onClick={() => window.location.href = '/signup'} type="button" className="btn btn-primary" style={{ marginLeft: '10px' }}>
                Signup
              </button>
            )}
    </div>
  );
};

const GoogleHome = () => {
  const navigate = useNavigate(); // Import the useNavigate hook
  const [showGmailDetails, setShowGmailDetails] = useState(false);
  const [showProfileLinks, setShowProfileLinks] = useState(false);
  const [showSignupLinks, setShowSignupLinks] = useState(false);
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the user is authenticated
 


  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    position: 'relative',
    
  };

  const upperTextStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '1px',
  };

  const boxStyle = {
    maxWidth: '600px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '40px',
    position: 'relative',
  };

  const inputContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '52px',
    paddingRight: '50px',
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    cursor: 'pointer',
  };

  const iconImageStyle = {
    height: '32px',
    marginRight: '4px',
  };

  const iconImageStyle1 = {
    height: '23px',
    marginRight: '4px',
  };

  const buttonStyle = {
    marginTop: '6px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4285f4',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const doodleStyle = {
    position: 'absolute',
    top: '-59%',
    right: '64%',
    maxWidth: '39%',
    cursor: 'pointer'
  };

  const pointersContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '9px',
    marginLeft: '-8px',
  };

  const pointerStyle = {
    fontSize: '16px',
    margin: '0',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  const secondImageStyle = {
    top: '-127%',
    left: '16%',
    maxWidth: '26%',
    cursor: 'pointer'
    
  };

  const gmailStyle = {
    margin: '-57px 157px',
    cursor: 'pointer'
  };

  const imagesStyle = {
    margin: '32px 93px',
    cursor: 'pointer'
  };

  const dotedStyle = {
    margin: '-62px 46px',
    width: '11%',
    cursor: 'pointer'
  };

  const signupStyle = {
    margin: '21px -63px',
    width: '13%',
    cursor: 'pointer'
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.q.value.toLowerCase(); // Convert to lowercase for case-insensitivity

    if (searchQuery.includes('amit')) {
      // Redirect to ../serps page or handle the navigation logic accordingly
      window.location.href = '../serps';
    } else {
      // Handle the default search behavior (e.g., perform a regular Google search)
      // You can update this part based on your application's requirements
      alert("Please don't forget my name");
    }
  };

  const gmailDetailsStyle = {
    top: '-176px',
    right: '-350px',
    padding: '18px',
    backgroundColor: '#F0F1F2',
    boxShadow: '0 0 0px rgba(0, 0, 0, 0.1)',
    borderRadius: '21px',
  };

  const handleGmailClick = () => {
    setShowGmailDetails(true);
    setTimeout(() => {
      setShowGmailDetails(false);
    }, 5000);

  
    
  }



  const handleDotedClick = () => {
    setShowProfileLinks(!showProfileLinks);
  };

  const handleGiconClick = () => {
    setShowSignupLinks(!showSignupLinks);
  };

 
  const handleLogout = () => {
    
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    console.log("this is my enter")
      // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className="container" style={containerStyle}>
      <div style={upperTextStyle}>
        <span style={gmailStyle} onClick={handleGmailClick}>
          Gmail
        </span>
        <span style={imagesStyle}>
          <a href="/images">Images</a>
        </span>
        <img src={doted} alt="Google Image" style={dotedStyle} onClick={handleDotedClick} />
        <img src={gicon} alt="Google Image" style={signupStyle}  onClick={handleGiconClick} />
      </div>
      <div style={boxStyle}>
      <img src={google} alt="Google Image" style={secondImageStyle} />
        <form onSubmit = {handleFormSubmit}>
          <div style={inputContainerStyle}>
            <input
              type="text"
              style={inputStyle}
              name="q"
              placeholder="Type my name, u know right ?"
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
        <div className="pointers" style={pointersContainerStyle}>
          <h5 style={pointerStyle}><a href="/coverletter">Cover letter</a></h5>
          <h5 style={pointerStyle}><a href="/resume">Resume</a></h5>
          <h5 style={pointerStyle}><a href="/intro">My Intro</a></h5>
          <h5 style={pointerStyle}><a href="/podcast">Podcast</a></h5>
          <h5 style={pointerStyle}><a href="/skills">My skills</a></h5>
          <h5 style={pointerStyle}><a href="/project">Project 1</a></h5>
        </div>

        {showGmailDetails && (
          <div style={gmailDetailsStyle}>
            <h6><strong>Candidate contact details</strong></h6>
            <div className="modal-body">
  <ul style={{ listStyleType: 'disc', marginLeft: '-19px' }}>
    <li>Email: rawatamit2002@gmail.com</li>
    <li>Phone: +91 9711477328</li>
    <li>Address:</li>
    <ul style={{ listStyleType: 'circle', marginLeft: '-34px' }}>
      2nd floor
      House no. 736
      sec-5, Vasundhara
      Ghaziabad, UP (201010)
    </ul>
  </ul>

</div> 
          </div>
        )}
        {showProfileLinks && <ProfileLinksBox handleClose={() => setShowProfileLinks(false)} />}
        {showSignupLinks && <SignupLinksBox isAuthenticated={isAuthenticated} handleLogout={handleLogout} handleClose={() => setShowSignupLinks(false)} />}
      </div>
    </div>
  );
};

export default GoogleHome;