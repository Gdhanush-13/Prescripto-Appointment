import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  // Use env variable or fallback
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL ||
    "https://prescripto-backend-nkkd.onrender.com";

  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [dashData, setDashData] = useState(false);

  // Get all doctors
  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors`, {
        headers: { aToken },
      });
      if (data.success) setDoctors(data.doctors);
      else toast.error(data.message);
    } catch (error) {
      toast.error("Failed to fetch doctors");
      console.error(error);
    }
  };

  // Change doctor availability
  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/change-availability`,
        { docId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else toast.error(data.message);
    } catch (error) {
      toast.error("Error updating availability");
      console.error(error);
    }
  };

  // Get all appointments
  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/admin/appointments`,
        { headers: { aToken } }
      );
      if (data.success) setAppointments(data.appointments.reverse());
      else toast.error(data.message);
    } catch (error) {
      toast.error("Failed to fetch appointments");
      console.error(error);
    }
  };

  // Cancel appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/cancel-appointment`,
        { appointmentId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else toast.error(data.message);
    } catch (error) {
      toast.error("Error cancelling appointment");
      console.error(error);
    }
  };

  // Dashboard data
  const getDashData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/dashboard`, {
        headers: { aToken },
      });
      if (data.success) setDashData(data.dashData);
      else toast.error(data.message);
    } catch (error) {
      toast.error("Failed to load dashboard data");
      console.error(error);
    }
  };

  const value = {
    aToken,
    setAToken,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    getAllAppointments,
    cancelAppointment,
    dashData,
    getDashData,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
