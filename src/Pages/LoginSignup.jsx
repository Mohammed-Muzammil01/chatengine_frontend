import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";

const LoginSignup = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const togglePanel = () => {
    setIsSignUpActive((prev) => !prev);
  };

  return (
    <>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
        }
        
        body{
            background-color: #c9d6ff;
            background: linear-gradient(to right, #223c4b, #14d8b1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
        }
        
        .container{
            background-color: #fff;
            border-radius: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 480px;
        }
        
        .container p{
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
        }
        
        .container span{
            font-size: 12px;
        }
        
        .container a{
            color: #333;
            font-size: 13px;
            text-decoration: none;
            margin: 15px 0 10px;
        }
        
        .container button{
            background-color: #512da8;
            color: #fff;
            font-size: 12px;
            padding: 10px 45px;
            border: 1px solid transparent;
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
        }
        
        .container button.hidden{
            background-color: transparent;
            border-color: #fff;
        }
        
        .container form{
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            height: 100%;
        }
        
        .container input{
            background-color: #eee;
            border: none;
            margin: 8px 0;
            padding: 10px 15px;
            font-size: 13px;
            border-radius: 8px;
            width: 100%;
            outline: none;
        }
        
        .form-container{
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
        }
        
        .sign-in{
            left: 0;
            width: 50%;
            z-index: 2;
        }
        
        .container.active .sign-in{
            transform: translateX(100%);
        }
        
        .sign-up{
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
        }
        
        .container.active .sign-up{
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: move 0.6s;
        }
        
        @keyframes move{
            0%, 49.99%{
                opacity: 0;
                z-index: 1;
            }
            50%, 100%{
                opacity: 1;
                z-index: 5;
            }
        }
        
        .social-icons{
            margin: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .social-icons a{
            border: 1px solid #ccc;
            border-radius: 20%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 3px;
            width: 40px;
            height: 40px;
        }
        
        .toggle-container{
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: all 0.6s ease-in-out;
            border-radius: 150px 0 0 100px;
            z-index: 1000;
        }
        
        .container.active .toggle-container{
            transform: translateX(-100%);
            border-radius: 0 150px 100px 0;
        }
        
        .toggle{
            background-color: #223c4b;
            height: 100%;
            background: linear-gradient(to right, #14d8b1, #223c4b);
            color: #fff;
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
        }
        
        .container.active .toggle{
            transform: translateX(50%);
        }
        
        .toggle-panel{
            position: absolute;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            text-align: center;
            top: 0;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
        }
        
        .toggle-left{
            transform: translateX(-200%);
        }
        
        .container.active .toggle-left{
            transform: translateX(0);
        }
        
        .toggle-right{
            right: 0;
            transform: translateX(0);
        }
        
        .container.active .toggle-right{
            transform: translateX(200%);
        }
      `}
    </style>
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
        <div className={`form-container ${isSignUpActive ? 'sign-up' : 'sign-in'}`}>
          <form>
            <h1>{isSignUpActive ? 'Create Account' : 'Sign In'}</h1>
            <div className="social-icons">
              <span>{isSignUpActive ? 'Sign Up' : 'Sign In'} with Google</span>
              <a href="#" className="icons"><FaGoogle style={{fontSize:"1.5rem"}} /></a>
            </div>
            <span>{isSignUpActive ? 'or use your email for registration' : 'or use your email password'}</span>
            {isSignUpActive && <input type="text" placeholder="Name" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>{isSignUpActive ? 'Sign Up' : 'Sign In'}</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className={`toggle-panel ${isSignUpActive ? 'toggle-left' : 'toggle-right'}`}>
              {isSignUpActive ? (
                <>
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all of the site features</p>
                </>
              ) : (
                <>
                  <h1>Hello, Friend!</h1>
                  <p>Register with your personal details to use all of the site features</p>
                </>
              )}
              <button onClick={togglePanel}>
                {isSignUpActive ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default LoginSignup;
