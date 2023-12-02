import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import virtualwardrobe from '../images/VIRTUALWARDROBE.svg'
import cheetah from '../Images/cheetah.svg'
import '../CSS/Login.css'


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        {error && error}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-4xl">Virtual Wardrobe</h1>
              <p className="py-6">Create A New Account Here</p>
            </div>
            <div className="card sm:w-[25rem] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control mt-1">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                  />
                </div>
                <div className="form-control mt-1">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                  />
                </div>
                <div className="form-control mt-6 signup-button ">
                  <button> Sign Up!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
  );
};

export default Signup;
