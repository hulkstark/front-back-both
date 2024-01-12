import React from "react";

const Skills = (props) => {
  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
}
  
  return (
    
    <div className="container">
    <h4 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>My skills</h4>
    <p>I have categorized my skillset into three categories so that the recruiters can understand and provide roles accordingly. My preffered roles based on skills and experience are in Digital Marketing and Analytics or Project Management.

    </p>
    <h4>Hands-on Relevant Industry Experience</h4>        
<div className="container" style={{display: 'flex', marginTop:'30px'}}> 

<div className="card" style={{width: "18rem", marginRight: '10px', maarginLeft: '15px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Paid Advertisements</h5>
<p className="card-text">Managed and optimized paid advertising campaigns using platforms such as Google Ads, Facebook Ads, Linkedin Ads, and Quora Ads.
Handled monthly budget of 35-40 Lakhs.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Google Tag Manager & GA4</h5>
<p className="card-text">Implemented and managed tags for tracking and analytics, ensuring accurate data collection.
Setting up Google Analytics 4 from scratch.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", marginLeft: '10px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Google Data Studio</h5>
<p className="card-text">Created visually appealing and informative reports using Google Data Studio.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", marginLeft: '10px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">SEO, SEMRUSH & Google Search Console</h5>
<p className="card-text">Utilized Google Search Console, SEMRUSH for SEO optimization, analyzing search performance, and resolving issues.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>


</div>
<br></br>

{/* new headline - skillset 2 */}
<h4>Technical Skillset (Implementation Competency)- Promp Engineering (Frontend Development and Design)</h4>        
<div className="container" style={{display: 'flex', marginTop:'30px'}}> 

<div className="card" style={{width: "18rem", marginRight: '10px', maarginLeft: '15px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">HTML, CSS, Javascript</h5>
<p className="card-text">Developed and styled web pages using HTML, CSS, and Javascript. Have the ability to read and these technologies for Front-End-Development</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">React.js & BOOTSTRAP</h5>
<p className="card-text">Using the Bootstrap Framework with React-js to create visuallu appealing user interfaces. Completed projects using the two technologies.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>



<div className="card" style={{width: "18rem", marginLeft: '10px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Projects completed - My Portfolio & NewsMonkey</h5>
<p className="card-text">Designed a personal portfolio with various sections, including a cover letter, resume, podcast, and introduction. 
 Also, Developed a news website that fetches news items from external APIs for a dynamic and up-to-date user experience.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", marginLeft: '10px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Projects completed - Text-Utils & iNotebook</h5>
<p className="card-text">Created a utility app using React.js and Bootstrap for text manipulation, offering features like converting to uppercase, lowercase, clearing text, copying, and clearing spaces.
Built a note-taking app with React.js for frontend and Node.js for backend, including MongoDB for database management. Features include adding, updating, and deleting notes.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>




</div>
<br></br>
{/* skillset - 3 */}
<h4>Theoretical and Conceptual Skillset - Backend & API </h4>        
<div className="container" style={{display: 'flex', marginTop:'30px'}}> 

<div className="card" style={{width: "18rem", marginRight: '10px', maarginLeft: '15px', backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Backend & API - Can integrate Front-End with backend</h5>
<p className="card-text">Node.js:
Demonstrated proficiency in backend development using Node.js.
APIs:
Worked with APIs on various projects, including the integration of APIs in the iNotebook application.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>

<div className="card" style={{width: "18rem", backgroundColor: '#4287f5'}}>
{/* <img src="..." className="card-img-top" alt="..."/> */}
<div className="card-body">
<h5 className="card-title">Projects completed with Backend - iNotebook</h5>
<p className="card-text">Implemented Node.js for backend functionality and integrated with MongoDB for database management, showcasing theoretical and practical knowledge.</p>
{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
</div>
</div>






</div>




</div>     



  
  );
};





export default Skills;
