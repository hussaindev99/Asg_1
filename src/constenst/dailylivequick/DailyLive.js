import React from 'react'
import './DailyLive.css'
import icon4 from "../../assets/image/Icon (4).png"
import icon5 from "../../assets/image/Icon (5).png"
import icon6 from "../../assets/image/Icon (5).png"
import appdownload from "../../assets/image/App Download.png"
export default function DailyLive() {
    return (
        <div>
            <div class="endmindiv">
                <div class="endmindiv2">

                    <div className="iconimg11">
                        <img src={icon4} alt="" />
                        <p className="diali">Daily
                            Discounts</p>
                    </div>
                    <div className="iconimg11">
                        <img src={icon5} alt="" />
                        <p className="diali">Live
                            Tracing</p>
                    </div>
                    <div className="iconimg11">
                        <img src={icon6} alt="" />
                        <p className="diali">Quick
                            Delivery</p>
                    </div>
                </div>
            </div>
            <img src={appdownload} alt="" width="100%" />
        </div>
    )
}
