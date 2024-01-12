import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
 

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://front-back-both-server.vercel.app/api/auth/userlogin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })

      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        // Save the authToken Redirect to a new page or handle a successful login
        localStorage.setItem("token", data.token);
        console.log("token")
        navigate("/")
        props.showAlert("Logged in successfully", "success")
        
        
      } else {
        props.showAlert("Invalid details", "Error")
      }
     

    } catch (error) {
      console.error('Error:', error);
      props.showAlert("Invalid details", "Error")
    }

    
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" onChange={onChange} value={credentials.email} className="form-control" id="email" name="email" />
      </div>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" onChange={onChange} value={credentials.password} className="form-control" id="password" name="password" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default Login;
