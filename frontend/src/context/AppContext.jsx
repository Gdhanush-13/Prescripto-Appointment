import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";

  // Use environment variable with fallback
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [doctorsError, setDoctorsError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null);

  // Fetch doctors
  const getDoctorsData = async () => {
    if (!backendUrl) {
      toast.error("Backend URL is not defined. Check environment variables.");
      return;
    }
    setLoadingDoctors(true);
    setDoctorsError("");
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) setDoctors(data.doctors);
      else setDoctorsError(data.message);
    } catch (error) {
      console.error(error);
      setDoctorsError("Failed to load doctors data.");
    } finally {
      setLoadingDoctors(false);
    }
  };

  // Fetch user profile
  const loadUserProfileData = async (activeToken = token) => {
    if (!activeToken || !backendUrl) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token: activeToken },
      });

      if (data.success) setUserData(data.userData);
      else {
        toast.error(data.message);
        handleLogout();
      }
    } catch (error) {
      console.error(error);
      toast.error("Session expired. Please login again.");
      handleLogout();
    }
  };

  // On mount: fetch doctors
  useEffect(() => {
    getDoctorsData();
  }, []);

  // On token change: fetch user profile
  useEffect(() => {
    if (token) loadUserProfileData(token);
    else setUserData(null);
  }, [token]);

  // Login handler
  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    loadUserProfileData(newToken);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUserData(null);
  };

  const value = {
    doctors,
    loadingDoctors,
    doctorsError,
    getDoctorsData,
    currencySymbol,
    backendUrl,
    token,
    setToken: handleLogin,
    userData,
    setUserData,
    loadUserProfileData,
    handleLogout,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;