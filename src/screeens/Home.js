import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import axios from 'axios'
import { useRef, useEffect } from 'react'


function Home() {
  const userData = useRef(null);
  const authToken = localStorage.getItem("authToken")
  // useEffect(()=>{

    axios.get("http://localhost:5000/api/getUserData", {
      headers: {
        'authToken': `${authToken}`
      }
    })
      .then(response => {
        // console.log("auth data",response.data.userData.name)
        userData.current = response.data.userData.name
      })
      .catch(error => {
        // Handle any errors
        console.error("auth error",error);
      });

  // }, [authToken])
  console.log("name", userData.current)
  return (
    <div>
        <Navbar authData={userData.current}></Navbar>
        <Body></Body>
        <div>{userData.current}</div>
        <Footer></Footer>
    </div>
  )
}

export default Home