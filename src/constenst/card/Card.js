import React from 'react'
import './Card.css'
import food01 from "../../assets/image/food.png"
import food02 from "../../assets/image/food1.png"
import food03 from "../../assets/image/food2.png"
import food04 from "../../assets/image/food3.png"
export default function Card() {
  return (
    <div className="cardContiner">

    <div className="card1">
      <div className="crdin">
        <div>
          <p className="off20">15</p>
        </div>
        <div>
          <p className="of">% off</p>
        </div>
      </div>
      <p className="gagesptag">Greys Vage</p>
      <button className="daysbutton">6 Days Remaining</button>
    </div>
    <div className="card2">
      <div className="crdin">
        <div>
          <p className="off20">10</p>
        </div>
        <div>
          <p className="of">% off</p>
        </div>
      </div>
      <p className="gagesptag">Greys Vage</p>
      <button className="daysbutton">6 Days Remaining</button>
    </div>
    <div className="card3">
      <div className="crdin">
        <div>
          <p className="off20">25</p>
        </div>
        <div>
          <p className="of">% off</p>
        </div>
      </div>
      <p className="gagesptag">Greys Vage</p>
      <button className="daysbutton">7 Days Remaining</button>
    </div>
    <div className="card4">
      <div className="crdin">
        <div>
          <p className="off20">20</p>
        </div>
        <div>
          <p className="of">% off</p>
        </div>
      </div>
      <p className="gagesptag">Greys Vage</p>
      <button className="daysbutton">8 Days Remaining</button>
    </div>
  </div>

  )
}
