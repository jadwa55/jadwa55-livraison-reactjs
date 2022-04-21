import React from "react";
import Navbar from './../../../src/components/layouts/navbar';
import Siderbar from './../../../src/components/layouts/siderbar';
// import Cards from './../../../src/components/layouts/cards';
import Tabls from './../../../src/components/layouts/table';
// import Header from './../../../src/components/layouts/header';
// import CardDash from './../../../src/components/layouts/carddash';
import Forms from './../../../src/components/layouts/forms';
// import ModelCards  from './../../../src/components/layouts/modalcard';






class Dashboard extends React.Component {
  render() {
    return (
        
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

             <Navbar />
             <div class="app-main">
             <Siderbar />
             <div class="app-main__outer">
                 <div className="container mt-5">
              
                 {/* <Header /> */}
                 <Tabls />
                 <Forms />



                 </div>

                 </div>
                 </div>

        </div>

    );
  }
}

export default Dashboard;
