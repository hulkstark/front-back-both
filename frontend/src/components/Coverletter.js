import React from 'react';

const CoverLetter = () => {
  return (
    <div style={styles.body}>
      <div id="cover-letter" style={styles.coverLetter}>
        <p>
          Amit Singh Rawat <br />
          2nd Floor, Plot no. 736, Sec-5, Vasundhara <br />
          Ghaziabad, UP, 201010 <br />
          Rawatamit2002@gmail.com <br />
          9711477328 <br />
          [Date] <br />
          [Employer's Name] <br />
          [Company Name] <br />
          [Company Address] <br />
          [City, State, ZIP Code]
        </p>
        <br />
        <p>
          Dear [Employer's Name],
        </p>
        <p>
          I am writing to express my interest in the [Job Title] position at [Company Name], as advertised. With over seven years of experience in the field of digital marketing and a proven track record in project management and analytics, I am confident in my ability to contribute effectively to your team.
        </p>
        <p>
          In my current role as a System Analyst at Amdocs, I have been responsible for the reporting and analytics of our website, including marketing analytics. My daily tasks involve raising tickets for website issues for the software team, ensuring seamless functionality. Moreover, I play a pivotal role in overseeing the digital marketing strategy of the website, utilizing skills in Google Analytics 4 reporting, Data Studio reporting, and paid marketing.
        </p>
        <p>
          My technical expertise extends to front-end development, where I have proficiency in HTML, CSS, JavaScript, React.js, and Bootstrap. Additionally, I possess working knowledge of Node.js and MongoDB, although not in the implementation phase. This dual skill set enables me to bridge the gap between marketing and technology, facilitating effective communication between different teams.
        </p>
        <p>
          I have successfully undertaken several projects that showcase my capabilities in both digital marketing and technology integration. Notable examples include the front-end implementation and digital marketing of a "News Website," "My Portfolio," and the end-to-end development (front-end, digital marketing, martech, and backend) of a "Notes Website for Students." These projects have honed my project management skills and further strengthened my analytical and martech capabilities.
        </p>
        <p>
          I am particularly drawn to [Company Name] due to its reputation as a leader in [industry] and its commitment to innovation. I am eager to bring my unique blend of skills and experiences to your organization, contributing to the success of your projects and enhancing your digital presence.
        </p>
        <p>
          I am excited about the opportunity to further discuss how my skills align with the needs of [Company Name]. Thank you for considering my application. I look forward to the possibility of contributing to your team and bringing my passion for digital marketing and project management to [Company Name].
        </p>
        <br />
        <p>
          Sincerely, <br />
          Amit Singh Rawat
        </p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f1f1f1',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  coverLetter: {
    width: '100%',
    maxWidth: '1294px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // Prevent overflow within the container
    wordWrap: 'break-word', // Allow long words to break and wrap onto the next line
    boxSizing: 'border-box',
    wordBreak: 'break-word', // Break long words and wrap onto the next line
  },
};

export default CoverLetter;
