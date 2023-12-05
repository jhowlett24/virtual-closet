import { Link } from "react-router-dom";
import '../CSS/Login.css'

const ForgotPassword = () => {
    return(
        <div className="forgot-password-container">
            <div className="forgot-password min-h-screen">
                <h1 className="login-text forgot-password-text">Forgot Password</h1>
                <div className="card forgot-passwprd-card card-body w-[25rem] shadow-2xl bg-base-100">
                <input type="email" className="form-control login-item" id ="email" placeholder="e-mail"/> 
                <Link to="/h" className="login-item reset-password-link"> RESET PASSWORD </Link>
                </div>
                <h1 className="login-item check-email-text"> Check your email for a link to reset your password </h1>
            </div>
        </div>
    )
}

export default ForgotPassword