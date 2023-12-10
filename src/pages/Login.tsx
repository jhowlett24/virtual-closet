import { Link } from "react-router-dom";
import '../CSS/Login.css'
import login from '../Images/login.svg'

//Login page for returning users

const Login = () => {

    return (
        <div className="signup">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col">
                <img src = {login} className = "login-img"></img>
                <div className="card sm:w-[25rem] shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control mt-1">
                      <input
                        type="text"
                        placeholder="email"
                        required
                      />
                    </div>
                    <div className="form-control mt-1">
                      <input
                        type="text"
                        placeholder="password"
                        required
                      />
                    </div>
                    <div className="form-control mt-6 signup-button ">
                      <button> Login!</button>
                    </div>
                  </div>
                </div>
                <Link to="/recoverPassword" className="login-item forgot-password-link"> Forgot Password? </Link>
                <Link to="/signup" className="login-item registration-link"> Don't have an account? </Link>          </div>
            </div>
          </div>

    )
}

export default Login