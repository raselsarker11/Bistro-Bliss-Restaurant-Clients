import loginImg from '../../../src/assets/others/authentication2.png';
import backgroundImage from '../../../src/assets/others/authentication.png';
import axios from "axios";
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [terms_and_conditions, setTermsAndConditions] = useState(false);
    const [error, setError] = useState('');

    const handleRegistration = async (event) => {
        event.preventDefault();

        setError('');

        if (password !== password2) {
            setError('Passwords do not match!');
            alert('Passwords do not match!');
            return;
        }

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setError('Password must be at least eight characters long and contain at least one letter, one number, and one special character.');
            return;
        }

        const info = {
            name: name,
            email: email,
            terms_and_conditions: terms_and_conditions ? 'True' : 'False',
            password: password,
            password2: password2,
        };
        

        try {
            console.log('Payload being sent:', JSON.stringify(info));
            const response = await axios.post('http://localhost:8000/api/account/register/', info, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Response from server:', response.data);
            if (response.status >= 200 && response.status < 300) {
                setError('Congratulations! Your Account Created Successfully.');
                alert('Congratulations! Your Account Created Successfully.');
                setName('');
                setEmail('');
                setTermsAndConditions(false);
                setPassword('');
                setPassword2('');
                setError('');
                window.location.href = 'login';
            } else {
                setError(response.data?.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during axios request:', error);
            if (error.response) {
                setError(error.response.data?.message || 'Registration failed. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div
            className="hero min-h-screen bg-base-200"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-52">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[#61e945]">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={terms_and_conditions}
                                    onChange={(e) => setTermsAndConditions(e.target.value)}
                                    required
                                />
                                <span className="label-text">I agree to the terms and conditions</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#FEDFBB] text-black hover:bg-slate-300">Sign Up</button>
                        </div>
                        {error && <p id="error" style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-[600px] h-[450px]' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
