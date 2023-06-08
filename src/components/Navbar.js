import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    const {authData} = props 
    const navigate = useNavigate()
    console.log("test", props.authData)
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/login')
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fst-italic" to="/">Delicious</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {!authData && (
                        <div>
                          <li className="nav-item">
                            <Link className="nav-link" to="/login">
                              Login
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                              Signup
                            </Link>
                          </li>
                        </div>
                      )}
                      {authData && (
                        <li className="nav-item">
                          <button className="nav-link btn" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      )}
                </ul>
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar