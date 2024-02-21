import React from 'react'
import './BestDeal.css'
import image333 from "../../assets/image/Image (333).png"
import image422 from "../../assets/image/Image (422).png"
import image511 from "../../assets/image/Image (511).png"
import image1123 from "../../assets/image/Image (1123).png"
export default function BestDeal() {
    return (
        <div>
            <div className="cards1">
                <div className="textdiv">
                    <p className="dealsc">Best deals  </p>
                    <p className="crispysand">Crispy  Sandwiches</p>
                    <p className="ptag22">Enjoy the large size of sandwiches.<br /> Complete
                        perfect slice of<br /> sandwiches.</p> <br />
                    <button className="proceeedbotn">Proceed to order {">"} </button> <br />
                </div>

                <div>
                    <img src={image333} alt="" className="cardfoodimg1" />
                </div>
            </div>
            <div className="cards2">
                <div>
                    <img src={image422} alt="" className="cardfoodimg1" />
                </div>
                <div className="textdiv">
                    <p className="partiess">Celebrate parties with Fried Chicken</p> <br />
                    <p className="ptag22"> Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check
                        out
                        best deals for fried chicken.</p> <br />
                    <button className="proceeedbotn">Proceed to order {">"} </button> <br />
                </div>
            </div>
            <div className="cards3">
                <div className="textdiv">
                    <p className="partiess">Wanna eat hot <br /> & spicy Pizza?</p> <br />
                    <p className="ptag22"> Pair up with a friend and enjoy the <br />
                        hot and crispy pizza pops. Try it <br />
                        with the best deals.</p> <br />
                    <button className="proceeedbtn">Proceed to order {">"} </button> <br />
                </div>
                <div>
                    <img src={image511} alt="" className="cardfoodimg1" />
                </div>
            </div>
            <div className="backimdiv">
                <p className="pgtahed">Are you ready to order with <br /> the best deals?</p>
                <button className="Proceedbtn">Proceed to order {">"} </button>
            </div>
        </div>
    )
}
