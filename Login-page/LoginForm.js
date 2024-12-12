import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import './LoginForm.css'; // Import the custom CSS file
import './LoginForm.css';
import { useState } from 'react';
export default function LoginForm() {
    //using state to store 
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    //checking
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length >= 8 && password.length <= 16) {
            Swal.fire({
                icon: 'success', // Success emoji
                title: '🎉 Thank You for Logging In!',
                html: `
                    <p style="font-size: 16px;">
                        <strong>Your Log-In Credentials:</strong>
                        <br />
                        📧 Email: <span style="color: #007bff;">${email}</span>
                        <br />
                        🔒 Password: <span style="color: #28a745;">${password}</span>
                    </p>
                `,
                confirmButtonText: '👍 Got it!',
                confirmButtonColor: '#28a745',
            });
        } else {
            Swal.fire({
                icon: 'error', // Error emoji
                title: '⚠️ Invalid Password!',
                text: 'Password must be between 8 and 16 characters.',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        }
    }
    return (
        <div className="login-form-container">
            <h2 className="login-title">Welcome Back!</h2>
            <Form onSubmit={handleSubmit}>
                
                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" className="form-input" value={email} onChange={(e) =>setEmail(e.target.value)}  required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FloatingLabel>
                <p></p>
                <p>NOTE : Password must contain more than 8 and less than 16 characters </p>

                <Button type="submit" className="submit-button">
                    Log In
                </Button>
            </Form>
        </div>
    );
}
