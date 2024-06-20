import loginImg from '../../../src/assets/others/authentication1.png';
import backgroundImage from '../../../src/assets/others/authentication.png';


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-52">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-[450px] h-[350px] ' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;