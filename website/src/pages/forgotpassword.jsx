import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Forgot() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email) {
            try {
                const response = await axios.post('http://localhost:5000/forgotPassword', { email });
                
                if (response.status === 200) {
                    await Swal.fire({
                        title: 'Success!',
                        text: 'Password reset link sent to your email!',
                        icon: 'success',
                        confirmButtonColor: '#007bff',
                        background: '#f9f9f9',
                        color: '#333',
                        customClass: {
                            title: 'swal-title',
                            content: 'swal-content',
                        },
                    });
                    setEmail('');
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
            }
        } else {
            await Swal.fire({
                title: 'Error!',
                text: 'Please enter your email address.',
                icon: 'error',
                confirmButtonColor: '#dc3545',
                background: '#f9f9f9',
                color: '#333',
                customClass: {
                    title: 'swal-title',
                    content: 'swal-content',
                },
            });
        }
    };

    return (
        <div className="forgot">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            <a href="/login" className="back-link">Back to Login</a>
        </div>
    );
}

export default Forgot;
