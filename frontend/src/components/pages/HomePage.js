import React from "react";

// import logo  from './../../../src/components/images/logo.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <body>
          <nav id="navbar">
              <div id="logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9wxacfSYc2IsdCskNvW1spHwwd3F_fDXpA&usqp=CAU" 
                  alt="onlinemeal.com" />
              </div>
              <ul>
                  <li class="item"> <a href="">Home</a></li>
                  <li class="item"> <a href="">Menu</a></li>
              </ul>
          </nav>
          <section id="home">
              <h1 class="h_primary">Welcome to ResTau MARHABA</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit, dolor deleniti  </p>          
              <p>Lorem ipsum dol, dolor deleniti iciatis architecto </p>    
      
              <button class="btn">Order Now</button>
          </section>
          
          
          <section class="services_container" id="services_container">
              <h1 class="h_primary_center">
                  Our Menu
              </h1>
            <div class="line"></div>
              <div id="services">
                  <div class="box">
                      {/* <img src="" alt=""> */}
                      <h2 class="h_secondary">Food Ordering</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quibusdam unde inventore rem voluptate  lorem23 sequi aut omnis, praesentium ad eius quos molestias similiqu</p>
                  </div>           
                  <div class="box">
                      <img src="https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg" alt=""/>
                      <h2 class="h_secondary">Bulk Ordering</h2>
                      <p>Lorem ipsum dolor sit lorem23 amet consectetur adipisicing elit. Nulla, quibusdam unde inventore rem voluptate sequi aut omnis, praesentium ad eius quos molestias similiqu</p>
                  </div>            
                  <div class="box">
                      <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-delivery-scooter-boy-with-mask-png-png-image_5431954.jpg" alt=""/>
                      <h2 class="h_secondary">Food Catering</h2>
                      <p>Lorem ipsum dolor sit  lorem23 amet consectetur adipisicing elit. Nulla, quibusdam unde inventore rem voluptate sequi aut omnis, praesentium ad eius quos molestias similiqu</p>
                  </div>
              </div>
      
          </section>
          <footer>
              <div class="center">
                  Copyright &copy; www.onlinemeal.com all  rights reserved
              </div>
          </footer>
      </body>


    );
  }
}



export default HomePage;