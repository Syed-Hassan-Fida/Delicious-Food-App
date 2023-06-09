import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/assets/Loader";

// Create a new context
const UserDataContext = React.createContext();

const UserDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!authToken) {
        navigate("/login");
      } else {
        try {
          const loginResponse = await axios.get(
            "http://localhost:5000/api/getUserData",
            {
              headers: {
                authToken: authToken,
              },
            }
          );
          setData(loginResponse.data.userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  } else {
    return (
      <UserDataContext.Provider value={data}>
        {children}
      </UserDataContext.Provider>
    );
  }
};

// Custom hook to consume the UserDataContext
const useUserData = () => useContext(UserDataContext);

export { UserDataProvider, useUserData };
