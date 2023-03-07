import React from "react";
import ErorImage from '../images/error.jpg'

export default function NotFound() {
    return(
        <div><img src={ErorImage} alt='404' className="errorPic"/></div>
    );
}