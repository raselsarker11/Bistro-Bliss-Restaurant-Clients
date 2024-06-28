
import loginImg from '../../../src/assets/others/authentication2.png';
import backgroundImage from '../../../src/assets/others/authentication.png';
import { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    let {loginUser} = useContext(AuthContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        loginUser({
            target: {
                username: { value: email },
                password: { value: password },
            },
            preventDefault: () => {},
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-52">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#FEDFBB] text-black hover:bg-slate-300">Login</button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-[500px] h-[350px] ' src={loginImg} alt="Authentication Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Login;
