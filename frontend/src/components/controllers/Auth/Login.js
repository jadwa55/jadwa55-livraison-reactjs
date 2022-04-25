import React, {useState}from 'react';
import axios from 'axios';
import "./auth.css";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginAction , setRoleAction , setIdAction } from './../../../action/authAction';
const Login = () => {

 const [data , setData] = useState({
  email : "",
  password : ""
});

  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const dispatch = useDispatch();
  const APP_URL = "http://localhost:8080/api/";
  const login =(email, password)=> {
   return axios.post(APP_URL + 'login', {
     email: email,
     password: password,
   });
 }

  const handlePassword = (e) => {
    setData({ ...data,password: e.target.value });
  };

  const handleSubmit =()=> {
    login( data.email, data.password).then((response) => {
     
      (async () => {
        
        console.log(response.data.user)
        await dispatch(loginAction());
        // await dispatch(setRoleAction(response.data.token.role));
        // await dispatch(setIdAction(response.data.token.id));
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", response.data.user.id);
        window.localStorage.setItem("name", response.data.user.name);
        window.localStorage.setItem("email", response.data.user.email);
        window.localStorage.setItem("role", response.data.user.role);
        window.localStorage.setItem("login", 1);
        window.location = "/dashboard/category";
      })()
    });
    setSubmitted(true);
  };
  





 return ( 
  






<div className="login-fg">
  <div className="container-fluid">
  
    <div className="row d-flex justify-content-center ">

    <div class="col-xl-8 col-lg-7 col-md-12 bg">
               
            </div>
      <div className="col-xl-4 col-lg-5 col-md-12 login">
    
    <div className="login-section">
          <div className="logo clearfix">
            <a href="/">
              Livraison App
            </a>
          </div>
          <h3>Sign in into your account</h3>
          <ul className="social">
            <li><a href="#" className="facebook"><i className="fab fa-facebook-f facebook-i" /><span>Facebook</span></a></li>
            <li><a href="#" className="twitter"><i className="fab fa-twitter twitter-i" /><span>Twitter</span></a></li>
            <li><a href="#" className="google"><i className="fab fa-google google-i" /><span>Google</span></a></li>
          </ul>
          <div className="or-login clearfix">
            <span>Or</span>
          </div>
          <div className="form-container">
            <form  onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address"  email={data.email}
                                           onChange={handleEmail} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="email" className="input-text" placeholder="Password"   password={data.password}
                                 onChange={handlePassword} />
                <i className="fa fa-unlock-alt" />
              </div>
              <div className="checkbox clearfix">
                <div className="form-check checkbox-fg">
                  <input className="form-check-input" type="checkbox" defaultValue id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn-md btn-fg btn-block">Login</button>
              </div>
            </form>
          </div>
          <p>Don't have an account? <a href="/register" className="linkButton"> Register</a></p>
        </div>
    

    

       
      </div>
    </div>
  </div>
</div>


  );
}

 

export default Login;