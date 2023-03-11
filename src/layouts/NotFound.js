import { Container } from "@mui/material";
import React from "react";
import ErorImage from '../images/error.jpg'

export default function NotFound() {
    return(
        <Container><img src={ErorImage} alt='404' className="errorPic"/></Container>
    );
}