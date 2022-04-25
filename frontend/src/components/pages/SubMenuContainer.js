import React from "react";
import "./homepage.css";
import { isLogin } from './../../middlewares/AuthMiddleware';


class SubMenuContainer extends React.Component {
 
  logout = ()=> {

    localStorage.clear()
    window.location = "/";

  }

  render() {

    let role = window.localStorage.getItem("role");
    let button = '';
    let thisClass = this;
    if (isLogin() && role == "client") {
      button =
      <div>
      <a href="/panel">panel</a>
      <a href="" onClick={() => thisClass.logout()}>Logout</a>

        </div>
    } else if (isLogin() && role == "admin"){
      button = 
      <div>
      <a href="/dashboard/category">Dashboard</a>
      <a href="" onClick={() => thisClass.logout()}>Logout</a>

        </div>
      
    }else if (isLogin() && role == "livreur") {
      button =
      <div>
      <a href="/dashboard/delivery">Command</a>
      <a href="" onClick={() => thisClass.logout()}>Logout</a>

        </div>
     
    }
     else {
      button =
      <div>

      <a href="/login">login</a>
    <a href="/register">register</a>
    </div> 
    }


   






    return (
     <header>
  <a href="#" className="logo"><i className="fas fa-utensils" /> Food Delivry.</a>
  <nav className="navbar">
    <a className="active" href="/">home</a>
    <a href="/category">Category</a>
    <a href="#menu">menu</a>
    <a href="/about">about</a>
       {button}
  </nav>
  <div className="icons">
    <i className="fas fa-bars" id="menu-bars" />
    <i className="fas fa-search" id="search-icon" />
    <a href="#" className="fas fa-heart" />
    <a href="#" className="fas fa-shopping-cart" />
  </div>
</header>


    );
  }
}

export default SubMenuContainer;