import { ChevronRightRounded } from "@mui/icons-material";
import React from 'react';

function MenuCard(imgSrc, name) {
  return (
    <div className="rowMenuCard">
        <div className="imgBox">
            <img src={imgSrc} alt="" />
        </div>
        <h3>{name}</h3>
        <i className="loadMenu"></i>
        <ChevronRightRounded />
    </div>
  );
}

export default MenuCard;