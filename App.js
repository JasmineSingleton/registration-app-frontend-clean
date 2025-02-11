import { useState } from "react";
import axios from "axios";
import "./styles.css"; // Ensure this file exists

function App() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        try {
            const response = await axios.post("https://registration-app-backend.onrender.com/register", {
                fullName,
                email
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error: " + (error.response?.data?.error || "Something went wrong"));
        }
    };

    return (
        <div>
            <h1>Welcome! Please Register</h1>
            {message && <p>{message}</p>}
            <input 
                type="text" 
                placeholder="Full Name" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default App;
