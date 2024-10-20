import React, { useState } from "react";
import Swal from "sweetalert2";

function Forgot() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate an API call for password reset
        if (email) {
            // Replace with your actual API call
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
