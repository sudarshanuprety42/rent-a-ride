import React from "react";
import LogoImg from "../images/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoImg} alt="Logo" width={"80px"} />
      <span>Rent-A-Ride</span>
    </div>
  );
}
