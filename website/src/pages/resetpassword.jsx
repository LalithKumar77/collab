import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../styles/login.css";

function Reset() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            await Swal.fire({
                title: 'Error!',
                text: 'Passwords do not match. Please try again.',
                icon: 'error',
                confirmButtonColor: '#dc3545',  
                background: '#f9f9f9', 
                color: '#333',
                customClass: {
                    title: 'swal-title',
                    content: 'swal-content',
                },
            });
            return;
        }

        setLoading(true); // Set loading to true while processing

        try {
            const response = await axios.post(`http://localhost:5000/forgotPassword/reset/${token}`, { password: newPassword });

            if (response.status === 200) {
                await Swal.fire({
                    title: 'Success!',
                    text: 'Your password has been reset successfully!',
                    icon: 'success',
                    confirmButtonColor: '#007bff',  
                    background: '#f9f9f9',
                    color: '#333',
                    customClass: {
                        title: 'swal-title',
                        content: 'swal-content',
                    },
                });

                // Clear the input fields
                setNewPassword("");
                setConfirmPassword("");

                // Navigate to the login page
                navigate("/login");
            }
        } catch (error) {
            await Swal.fire({
                title: 'Error!',
                text: error.response ? error.response.data.message : 'An error occurred. Please try again.',
                icon: 'error',
                confirmButtonColor: '#dc3545',
                background: '#f9f9f9',
                color: '#333',
                customClass: {
                    title: 'swal-title',
                    content: 'swal-content',
                },
            });
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="reset">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
}

export default Reset;
