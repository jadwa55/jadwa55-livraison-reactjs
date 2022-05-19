import React from 'react';
import { register} from './../../../services/AuthService';
import "./auth.css";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', email: '', telephone: '', password: '', passwordConfirm: '', role: '' };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        // this.handleTelephone = this.handleTelephone(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    // handleTelephone(event) {
    //     this.setState({ telephone: event.target.value });
    // }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirm(event) {
        this.setState({ passwordConfirm: event.target.value });
    }
    
    handleRole(event) {
        this.setState({ role: event.target.value });
    }


    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.firstName);
        console.log('A LastName was submitted: ' + this.state.lastName);
        console.log('A telephone was submitted: ' + this.state.telephone);
        console.log('A email was submitted: ' + this.state.email);
        console.log('A password was submitted: ' + this.state.password);
        console.log('A passwordConfirm was submitted: ' + this.state.passwordConfirm);
        console.log('A type was submitted: ' + this.state.role);

        try {
            let repRegister = await register(this.state.firstName, this.state.lastName, this.state.telephone, this.state.email, this.state.password, this.state.passwordConfirm, this.state.role)
            console.log(repRegister);

            if (repRegister.status === 200) {
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
                <input type="text" name="firstName" className="input-text" placeholder="Name" value={this.state.firstName} onChange={(event)=>this.handleFirstName(event)}/>
                <i className="fas fa-users" />
              </div>
              <div className="form-group form-fg">
                <input type="text" name="lastName" className="input-text" placeholder="LastName" value={this.state.lastName} onChange={(event)=>this.handleLastName(event)}/>
                <i className="fas fa-users" />
              </div>
              <div className="form-group form-fg">
                <input type="number" name="telephone" className="input-text" placeholder="tel" value={this.state.telephone} />
                <i className="fas fa-users" />
              </div>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address" value={this.state.email} onChange={(event)=>this.handleEmail(event)} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="password" className="input-text" placeholder="Password" value={this.state.password} onChange={(event)=>this.handlePassword(event)} />
                <i className="fa fa-unlock-alt" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="passwordConfirm" className="input-text" placeholder="PasswordConfirm" value={this.state.passwordConfirm} onChange={(event)=>this.handlePasswordConfirm(event)} />
                <i className="fa fa-unlock-alt" />
              </div>
             
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