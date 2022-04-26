import React from 'react';
import { register} from './../../../services/AuthService';
import "./auth.css";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', role: '' };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleType(event) {
        this.setState({ role: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.name);
        console.log('A email was submitted: ' + this.state.email);
        console.log('A password was submitted: ' + this.state.password);
        console.log('A type was submitted: ' + this.state.role);

        try {
            let repRegister = await register(this.state.name, this.state.email, this.state.password, this.state.role)
            console.log(repRegister);

            if (repRegister.status == 200) {
                window.location = "/login";
            }
        } catch (error) {
            console.log(error);
            window.location = "/register";
        }
    }

  render() {
    return (

  

<div className="login-fg">
  <div className="container-fluid">
  
    <div className="row d-flex justify-content-center ">

    <div class="col-xl-8 col-lg-7 col-md-12 bga">
               
    </div>
      <div className="col-xl-4 col-lg-5 col-md-12 login">
    
    <div className="login-section">
          <div className="">
            <a href="/">
              Restau MARHABA
            </a>
          </div>
          <h3>Sign up into your new account</h3>
          <ul className="social">
            <li><a href="#" className="facebook"><i className="fab fa-facebook-f facebook-i" /><span>Facebook</span></a></li>
            <li><a href="#" className="twitter"><i className="fab fa-twitter twitter-i" /><span>Twitter</span></a></li>
            <li><a href="#" className="google"><i className="fab fa-google google-i" /><span>Google</span></a></li>
          </ul>
          <div className="or-login clearfix">
            <span>Or</span>
          </div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group form-fg">
                <input type="name" name="name" className="input-text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                <i className="fas fa-users" />
              </div>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address" value={this.state.email} onChange={this.handleEmail} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="password" className="input-text" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                <i className="fa fa-unlock-alt" />

              </div>
              {/* <div className="form-group form-fg">
                <select className="input-text" value={this.state.role} onChange={this.handleType} required>
                                <option >Role</option>

                                <option value='client'>Client</option>
                                <option value="livreur">delivery</option>
                </select>
                    <i class="fas fa-user-tag"></i>
              </div> */}
             
              <div className="form-group mt-2">
                <button type="submit" className="btn-md btn-fg btn-block">Register</button>
              </div>
            </form>
          </div>
        </div>
    

    

       
      </div>
    </div>
  </div>
</div>
 



    );
  }
}

export default Register;