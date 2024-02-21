import React from 'react'
import './Header.css'
import MaskGroup from "../../assets/image/Mask Group.png"
import mapmaker from "../../assets/image/map-marker-alt.png"
import searcha from "../../assets/image/Search.png"
import userpng from "../../assets/image/user.png"
export default function Header() {
  return (
    <div className="imghead">
    <div classnaem="navbar">
      <div className="foodwaondiv">
        <img src={MaskGroup} alt="" className="maskgroupimg" />
        <p className="fhead">food </p>
        <p className="whead">waGon</p>
        <p className="dilver">Deliver to:</p>
        <img src={mapmaker} alt="" class="locimg"/>
        <p className="muhpur">Mohammadpur Bus Stand, Dhaka</p>
      </div>
    </div>
    <div className="navbarr">
      <div className="secbar">
        <img src={searcha} alt="" />
        <label for="search food"></label>
        <input type="text" id="Search Food" name="Search Food" placeholder="Search Food" className="secerc" />
      </div>
    </div>
    <button className="button">
      <img src={userpng} alt="" />
      <p className="lobutton">Login</p>
    </button>
  </div>


  )
}

