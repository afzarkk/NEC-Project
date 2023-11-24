import React from "react";
import "./popupcard.css";
import connectionImage from "../../../assets/images/done-rafiki-2.svg";
import closeIcon from "../../../assets/icons/group-21.svg";

const PopupCard = (props) => {

  return (
    <>
    <div className="overlay">
    <div className="popup">
        <span class="header">
          {props.data.title}
          <div className="shape"><img src={closeIcon} alt="Image" className={props.data.iconClassName} /></div>
        </span>

        <div className="content">
          <img src={props.data.image} alt="Image" />
        </div>
        <p class="footer">
          {props.data.paragraph}
        </p>
      </div>
    </div>
      
    </>
  );
};

export default PopupCard;
