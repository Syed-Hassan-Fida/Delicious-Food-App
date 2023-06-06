import { useState } from "react"
import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password:""
  })
  let navigate = useNavigate()
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      fetch("http://localhost:5000/api/login", {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
        .then(data => {
            if(data.success === true){
                // navigate to home page
                localStorage.setItem("authToken", data.token)
                // navigate("/")
                
                // empty form inputs
                setFormData({
                email: '',
                password: ''
                });
            } else {
                setError(data.errors)
                console.log("data", error)
            }
          })

    } catch (error){
      console.log("data", formData)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div><div>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ "borderRadius": "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign-Up Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="col-md-6  pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          name="email"
                          className="form-control form-control-lg"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 pb-2">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 d-flex justify-content-center">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="pt-2 d-flex justify-content-center">
                      <p>Created an Account: <Link to="/signup">Signup</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div></div>
  )
}

export default Login