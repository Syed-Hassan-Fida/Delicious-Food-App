import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const authData = localStorage.getItem("authToken")
    if(authData){
        return (
            <Outlet/>
        )
    } else{
        return <Navigate to="/login"/>
    }
  
}

export default ProtectedRoutes