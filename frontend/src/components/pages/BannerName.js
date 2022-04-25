import React from "react";
// import "./homegpage";
import SubMenuContainer from "./SubMenuContainer";



class BannerName extends React.Component {
  render() {
    return (
        <div className= "landingpage mt-5">
        <SubMenuContainer/>

     <section className="about mt-5 " id="about">
  <h3 className="sub-heading mt-5 "> about us </h3>
  <h1 className="heading"> why choose us? </h1>
  <div className="rowo">
    <div className="image">
      <img src="https://us.123rf.com/450wm/artnahla/artnahla1910/artnahla191000162/137046944-courier-from-motorcycle-ride-hailing-service-in-indonesia-sending-box-of-food-to-customer-wearing-gr.jpg?ver=6" alt />
    </div>
    <div className="content">
      <h3>best food in the country</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast" />
          <span>free delivery</span>
        </div>
        <div className="icons">
          <i className="fas fa-dollar-sign" />
          <span>easy payments</span>
        </div>
        <div className="icons">
          <i className="fas fa-headset" />
          <span>24/7 service</span>
        </div>
      </div>
      <a href="#" className="btnn">learn more</a>
    </div>
  </div>
</section>
</div>


    );
  }
}

export default BannerName;

