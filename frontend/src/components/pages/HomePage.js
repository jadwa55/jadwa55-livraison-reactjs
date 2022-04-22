import React from "react";
// import { handelCatchInAxios } from "../../../services/AxiosCatchService";


import '../../index';

import Header from "./BannerName";
import MenuContainer from "./MenuContainer";
import BannerName from './BannerName';
import SubMenuContainer from "./SubMenuContainer";
import {AccountBalanceWalletRounded,Chat,Favorite,HomeRounded,Settings,SummarizeRounded,} from "@mui/icons-material";
import MenuCard from './MenuCard';

function HomePage() {
  return (
    <div className="App">
      <Header />

      {/* Main Container */}

      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Salma"} discount={"20"} link={"#"} />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt="" 
              className="deliveryPic"
            />
          </div>
          {/* dishContainer*/}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              <div>
                <MenuCard imgSrc={""} name={"Pizza"} />
              </div>
            </div>
            <div className="dishitemContainer"></div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main> 

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}


export default HomePage;