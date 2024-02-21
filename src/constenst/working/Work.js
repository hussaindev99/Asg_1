import React from 'react'
import './Work.css'
import icon02 from "../../assets/image/Icon (2).png"
import menu02 from "../../assets/image/menu 2.png"
import Invoice from "../../assets/image/Invoice.png"
import dount1 from "../../assets/image/donut 1.png"
export default function Work() {
  return (
    <div>
    <h1 className="hoedose">How does it work</h1>
    <div className="miiandiv">
      <div>
        <img src={icon02} alt="" className="mappimg" />
        <p className="selctloc">Select location</p>
        <p className="chanageclor">Choose the location where your <br /> food will be delivered.</p>
      </div>
      <div>
        <img src={menu02} alt="" className="Chooseorde" />
        <p className="selctloc">Choose order</p>
        <p className="chanageclor">Check over hundreds of menus to <br /> pick your favorite food</p>
      </div>
      <div>
        <img src={Invoice} alt="" className="voicein" />
        <p className="selctloc">Pay advanced</p>
        <p className="chanageclor">It's quick, safe, and simple. Select <br /> several methods of payment</p>
      </div>
      <div>
        <img src={dount1} alt="" className="dountyuy" />
        <p className="selctloc">Enjoy meals</p>
        <p className="chanageclor">Food is made and delivered directly <br /> to your home.</p>
      </div>
    </div>
  </div>

  )
}
