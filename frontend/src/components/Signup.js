import {React, useState} from 'react'
import { json, useNavigate } from 'react-router-dom';


const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert('Passwords do not match');
      return;
    }
    const {name, email, password} = credentials;
    try {
      const response = await fetch('https://front-back-both-server.vercel.app/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        // Save the authToken Redirect to a new page or handle a successful login
        localStorage.setItem("token", data.token);
        
        navigate("/")
        console.log(localStorage.getItem("token"));
        props.showAlert("Account created successfully", "success")
        
        
      } else {
        props.showAlert("Invalid Credentials", "Danger")// Handle unsuccessful login, e.g., show an error message to the user
      }
     

    } catch (error) {
      console.error('Error:', error);
    }

    
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text" onChange={onChange} name="name" className="form-control" id="name"/>
      </div>
    </div>
    <div className="row mb-3">
      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email" onChange={onChange}  name="email" className="form-control" id="email"/>
      </div>
    </div>

    <div className="row mb-3">
      <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password" onChange={onChange}  name="password" className="form-control" id="password"/>
      </div>
    </div>
   
    <div className="row mb-3">
      <label htmlFor="cpassword" className="col-sm-2 col-form-label">Confirm Password</label>
      <div className="col-sm-10">
        <input type="password" onChange={onChange}  name="cpassword" className="form-control" id="cpassword"/>
      </div>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Signup
