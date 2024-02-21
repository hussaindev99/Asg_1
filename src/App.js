
import './App.css';
import React from "react"
import Footer from "./constenst/footer/Footer"
import Header from "./constenst/header/Header"
import Slider from "./constenst/slider/Slider"
import Card from "./constenst/card/Card"
import Work from "./constenst/working/Work"
import Offcards from "./constenst/offcards/Offcards"
import PopularItem from "./constenst/popularItems/PopularItem"
import PizzaSteak from "./constenst/pizzasteak/PizzaSteak"
import DailyLive from "./constenst/dailylivequick/DailyLive"
import BestDeal from "./constenst/bestdealcard/BestDeal"

function App() {
  return (
    <div className='body'>
      <Header />

      <Slider />

      <Card />

      <Work />

      <PopularItem />

      <Offcards />

      <PizzaSteak />

      <DailyLive />

      <BestDeal />

      <Footer />
    </div>
  )
}

export default App