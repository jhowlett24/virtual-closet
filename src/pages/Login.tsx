import { Link } from "react-router-dom";
import '../CSS/Login.css'
import cheetah from '../Images/cheetah.svg'
import login from '../Images/login.svg'


const Login = () => {
    return(
        <div className="login-container">

            <img src={cheetah} className="cheetah-background cheetah-background-left"></img>
            
            <div className="login">
                <img src = {login} className = "login-img"></img>
                {/* <h1 className="login-text">Login</h1> */}
                <input type="email" className="form-control login-item" id ="email" placeholder="e-mail"/> 
                <input type="password" className="form-control login-item" id = "password" placeholder="password"/> 
                {/* <img src={eye} className="eye-img"></img> */}
                <Link to="/" className="login-item login-link"> Login </Link>
                <Link to="/recoverPassword" className="login-item forgot-password-link"> Forgot Password? </Link>
                <Link to="/signup" className="login-item registration-link"> Don't have an account? </Link>
            </div>
            
            <img src={cheetah} className="cheetah-background cheetah-background-right"></img>
        
        </div>
    )
}

export default Login