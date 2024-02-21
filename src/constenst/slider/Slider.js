import React from 'react'
import './Slider.css'
import a123456 from "../../assets/image/123456.png"
import bikeimg from "../../assets/image/Icon.png"
import lockimg from "../../assets/image/Icon (1).png"
import icon03 from "../../assets/image/Icon (3).png"
import image02 from "../../assets/image/Image (2).png"
export default function Slider() {
  return (
    <div className="stp1">
    <h1 className="youstart">Are you starving?</h1>
    <p className="youstar">Within a few clicks, find meals that are accessible near you</p>
    <div className="img122">
      <div className="stp2">
        <div className="stp3">
          <button className="bikebiotn">
            <img src={bikeimg} alt="" className="bikeimg" />
            <p>Delivery</p>
          </button>
          <button className="bikebiotn1">
            <img src={lockimg} alt="" className="lokeimg" />
            <p>Pickup</p>
          </button>
        </div> <hr className ="hrlineblack"/>
        <div className=" sececsh">
        
          <div className="inpuandimg">
          
            <img src={a123456} alt="" className="image11" />
            <input type="text" id="Enter Your Address" name="Enter Your Address"
              placeholder="Enter Your Address" className="inpu11" />
          </div>
          <button className="imgbuttni">
            <img src={icon03} alt="" className="buttonimg" />
            Find Food
          </button>
        </div>
      </div>
      <img src={image02} alt="" className="foodimg" />
    </div>
  </div>






    )
}
