import { Link } from "react-router-dom";
import '../CSS/Login.css'
import login from '../Images/login.svg'


const Login = () => {
    return(
        <div className="login-container">

            <div className="login min-h-screen">
                <img src = {login} className = "login-img"></img>
                <div className="card card-body w-[25rem] shadow-2xl bg-base-100">
                <input type="email" className="form-control login-item" id ="email" placeholder="e-mail"/> 
                <input type="password" className="form-control login-item" id = "password" placeholder="password"/> 
                <Link to="/" className="login-item login-link"> LOGIN </Link>
                </div>
                <Link to="/recoverPassword" className="login-item forgot-password-link"> Forgot Password? </Link>
                <Link to="/signup" className="login-item registration-link"> Don't have an account? </Link>
            </div>
        
        </div>
    )
}

export default Login