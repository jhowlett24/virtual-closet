import { Link } from "react-router-dom";
import '../CSS/Login.css'

//Upon clicking forgot password on the login page, you are brought here
//No functionality yet

const ForgotPassword = () => {
    return(
        <div className="signup">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
          <h1 className="login-text forgot-password-text">Reset Password</h1>
            <div className="card sm:w-[25rem] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control mt-1">
                  <input
                    type="text"
                    placeholder="email"
                    required
                  />
                </div>
                    <Link to="/h" className="login-item reset-password-link"> RESET PASSWORD </Link>
              </div>
            </div>
            <h1 className="login-item check-email-text"> Check your email for a link to reset your password </h1>
            </div>
        </div>
      </div>
    )
}

export default ForgotPassword
