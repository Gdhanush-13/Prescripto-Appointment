import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // Environment variables
    const backendUrl =
    import.meta.env.VITE_BACKEND_URL ||
    "https://prescripto-backend-nkkd.onrender.com";
    const currency = import.meta.env.VITE_CURRENCY || "USD"; // fallback if env missing

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        try {
            const dateArray = slotDate.split("_");
            return `${dateArray[0]} ${months[Number(dateArray[1]) - 1]} ${dateArray[2]}`;
        } catch (error) {
            console.error("Invalid date format:", slotDate, error);
            return slotDate;
        }
    };

    // Function to calculate the age eg. ( 2000-01-20 => 24 )
    const calculateAge = (dob) => {
        try {
            const today = new Date();
            const birthDate = new Date(dob);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            // adjust if birthday hasn’t occurred yet this year
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        } catch (error) {
            console.error("Invalid DOB:", dob, error);
            return null;
        }
    };

    const value = {
        backendUrl,
        currency,
        slotDateFormat,
        calculateAge,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
