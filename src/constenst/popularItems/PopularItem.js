import React from 'react'
import './PopularItem.css'
import icon002 from "../../assets/image/Icon (2).png"
import Rectangle from "../../assets/image/Rectangle 336.png"

import Rectangle01 from "../../assets/image/Rectangle 336 (1).png"
import Rectangle02 from "../../assets/image/Rectangle 336 (2).png"
import Rectangle03 from "../../assets/image/Rectangle 336 (3).png"
import Rectangle04 from "../../assets/image/Rectangle 336 (4).png"

export default function Popularitem() {
  return (
    <div>   
    <div className="papularitem">Popular items</div>
    <div className="maindiv2">
      <button className="arowbutton">  {"<"} </button>
      <div>
        <img src={Rectangle} alt="" class="Rectangleimgas" />
        <p className="allburger">Cheese Burger</p>
        <div className="allmapimg">
          <img src={icon002} alt="" class="Rectanglemap" />
          Burger Arena
        </div>
        <p className="llimgrup">$3.88</p>
        <button className="orderbuttoin">Order Now</button>
      </div>
      <div>
        <img src={Rectangle01} alt="" className="Rectangleimgas" />
        <p className="allburger">Toffe’s Cake</p>
        <p className="allmapimg">
          <img src={icon002} alt="" className="Rectanglemap" />
          Top Sticks
        </p>
        <p class="llimgrup">$4.00</p>
        <button className="orderbuttoin">Order Now</button>
      </div>
      <div>
        <img src={Rectangle02} alt="" className="Rectangleimgas" />
        <p className="allburger">Dancake</p>
        <p className="allmapimg">
          <img src={icon002} alt="" className="Rectanglemap" />
          Dancake
        </p>
        <p class="llimgrup">$1.99</p>
        <button className="orderbuttoin">Order Now</button>
      </div>
      <div>
        <img src={Rectangle03} alt="" className="Rectangleimgas" />
        <p class="allburger">Crispy Sandwitch</p>
        <p class="allmapimg">
          <img src={icon002} alt="" className="Rectanglemap" />
          Fastfood Dine
        </p>
        <p class="llimgrup">$3.00</p>
        <button className="orderbuttoin">Order Now</button>
      </div>
      <div>
        <img src={Rectangle04} alt="" className="Rectangleimgas" />
        <p className="allburger">Thai Soup</p>
        <p className="allmapimg">
          <img src={icon002} alt="" className="Rectanglemap" />
          Foody man
        </p>
        <p class="llimgrup">$2.79</p>
        <button className="orderbuttoin">Order Now</button>
      </div>
      <button className="arowbutton"> {">"} </button>
    </div>
</div>
  )
}
