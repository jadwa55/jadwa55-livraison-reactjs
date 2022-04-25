import React from "react";
import HomePage from "./HomePage.js";
import SubMenuContainer from "./SubMenuContainer.js";



class Landingpage extends React.Component {
  render() {
    return (
     <div className= "landingpage">
      <SubMenuContainer/>
      <HomePage/>



</div>

    );
  }
}

export default Landingpage;