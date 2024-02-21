import React from 'react'
import './Footer.css'
import instagramimg from "../../assets/image/instagram.png"
import facebookimg from "../../assets/image/facebook.png"
import twitterimg from "../../assets/image/twitter.png"
import emailimg from "../../assets/image/envelope.png"
import addcimg from "../../assets/image/Symbol.png"
import madewithby from "../../assets/image/Made with  by.png"
export default function Footer() {
  return (
    <div className="end_maindivblack">
        <div className="textmindiv">
          <div className="textdiv11">
            <h4 className="h4tag">Our top cities</h4>
            <p>San Francisco</p>
            <p>Miami</p>
            <p>San Diego</p>
            <p>East Bay</p>
            <p>Long Beach</p>
          </div>
          <div className="textdiv22">
            <p>Los Angeles</p>
            <p>Washington DC</p>
            <p>Seattle</p>
            <p>Portland</p>
            <p>Nashville</p>
          </div>
          <div className="textdiv22">
            <p>New York City</p>
            <p>Orange County</p>
            <p>Atlanta</p>
            <p>Charlotte</p>
            <p>Denver</p>
          </div>
          <div className="textdiv22">
            <p>Chicago</p>
            <p>Phoenix</p>
            <p>Las Vegas</p>
            <p>Sacramento</p>
            <p>Oklahoma City</p>
          </div>
          <div className="textdiv33">
            <p>Columbus</p>
            <p>New Mexico</p>
            <p>Albuquerque</p>
            <p>Sacramento</p>
            <p>New Orleans</p>
          </div>

        </div>
        <hr style={{backgroundColor: 'white'}} />
        <div class="end_maindivblack2">
          <div>
            <h4 className="h4tag">Company</h4>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p> Blog</p>
          </div>
          <div>
            <h4 className="h4tag">Contact</h4>
            <p>Help & Support</p>
            <p>Partner with us </p>
            <p>Ride with us</p>
          </div>
          <div>
            <h4 className="h4tag">Legal</h4>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p> Cookie Policy</p>
          </div>
          <div>
            <div className="allimg">
              <p>Follow Us</p>
              <div className="imginstfactwi">
                <img src={instagramimg} alt="" />
                <img src={facebookimg} alt="" />
                <img src={twitterimg} alt="" />
              </div>
              <p>Receive exclusive offers in your mailbox</p>
            </div>
            <div className="abcd">
              <div className="inputemails">
                <img src={emailimg} alt="" className="emilimg" />
                <input type="text" id=" Enter Your email" name="Enter Your email"
                  placeholder="Enter Your email" className="inputemail" />
              </div>
              <button className="Subscribebuttom">Subscribe</button>
            </div>

          </div>
        </div>
        <hr style={{color: 'white'}} />
        <div className="ptagimg">
          <div className="footerEl">All rights Reserved  <img src={addcimg} alt="" /> Your Company, 2021</div>
          <div className='footerEl'><img style={{marginTop: 5, paddingRight: 3}}  src={madewithby} alt="" />  Themewagon</div>
        </div>
      </div>
  )
}
