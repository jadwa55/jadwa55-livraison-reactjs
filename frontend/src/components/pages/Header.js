import React from 'react';
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";

function Header() {
  return (
    <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo"
        />

        <div className="inputBox">
            <SearchRounded className="searchIcon" />
            <input type="text" placeholder="Search" />
        </div>

        <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
            <div className="cart_content">
            <p>1</p>
            </div>
        </div>

        <div className="profileContainer">
            <div className="imgBox">
            <img 
                src="" alt=""
            />
            </div>
        <h2 className="userName">SalmaAAAAAA</h2>
        </div>

        <div className="toggleMenu">
        <BarChart className="toggleIcon" />
        </div>

    </header>
  );
}
