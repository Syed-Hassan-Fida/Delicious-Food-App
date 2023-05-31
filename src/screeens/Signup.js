import React from "react";
import { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });
    const [message,setMessage] = useState('');
    const [error, setError] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data.errors);
        if(data.success === true){
            // success message
            setMessage('Form submitted successfully.');
            // empty form inputs
            setFormData({
              name: '',
              email: '',
              password: '',
              location: ''
            });
        } else {
            setError(data.errors)
        }

      // Do something with the response
    })
    .catch(error => {
      console.log('Error:', error.errors);
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div>
      <section className="vh-80 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ "border-radius": "15px;" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign-Up Form</h3>
                  {message && <p className="btn btn-success">{message}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control form-control-lg"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label className="form-label" for="name">
                                Name
                            </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            name="email"
                            className="form-control form-control-lg"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" for="emailAddress">
                            Email
                          </label>
                          {error.length > 0 && (
                            <div>
                                {error.map((error, index) => (
                                    (error.path === "email") ? 
                                        <p className="btn btn-success">{error.msg}</p> : ""
                                    
                                ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" for="password">
                            Password
                          </label>
                          {error.length > 0 && (
                            <div>
                                {error.map((error, index) => (
                                    (error.path === "password") ? 
                                        <p className="btn btn-success">{error.msg}</p> : ""
                                    
                                ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-control form-control-lg"
                            value={formData.location} 
                            onChange={handleChange}
                          />
                          <label className="form-label" for="location">
                            Location
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
