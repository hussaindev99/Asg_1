import React from 'react'
import './Offcards.css'
import food11 from '../../assets/image/image10.png'
import icon3 from '../../assets/image/start img.png'
import food8 from '../../assets/image/Image (3).png'
import food9 from '../../assets/image/Image (4).png'
import food10 from '../../assets/image/Image (5).png'
import reslogo from '../../assets/image/Image (6).png'
import reslogo1 from '../../assets/image/Image (7).png'
import reslogo2 from '../../assets/image/Image (8).png'
import reslogo3 from '../../assets/image/Image (9).png'
import reslogo4 from '../../assets/image/1231.png'
import food4 from '../../assets/image/123.png'
import food5 from '../../assets/image/345.png'
import reslogo5 from '../../assets/image/2342.png'
import reslogo6 from '../../assets/image/3453.png'
import food6 from '../../assets/image/234.png'
import food7 from '../../assets/image/456.png'
import reslogo7 from '../../assets/image/4564.png'


export default function Featured() {
  return (
    <div>
    <div> 
        <div>
    <h2 className="popular">Featured Restaurants</h2>
</div>


    <div className="mainform">
        <div className='mrlf' >
         <img src={food11} alt="" className="egg"/>   
         <div className="belu-dis">
             <img src={reslogo} alt="" className="blue-text"/>
             
             <div className="both">
                <p className="over-world">Foodworld</p>
             <div className="star-six">
                 <img src={icon3} alt="" className="star"/>
                 <p className="tweenty-six">26</p>
             </div>
            </div>
         </div>
         <div>
             <button className="tomoro"><p className="open">Opens tomorrow</p></button>
         </div>
        </div>
        <div className='mrlf' >
            <img src={food8} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo1} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="tomoro"><p className="open">Opens tomorrow</p></button>
            </div>
           </div> <div className='mrlf' >
            <img src={food9} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo2} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
           </div> <div className='mrlf' >
            <img src={food10} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo3} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
           </div>
    </div>
    

    <div className="formsecond">
        <div className='mrlf' >
            <img src={food4} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo4} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
           </div> <div className='mrlf' >
            <img src={food5} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo5} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
            
           </div>

 <div className='mrlf' >
            <img src={food6} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo6} alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
           </div> <div className='mrlf' >
            <img src={food7} alt="" className="egg"/>   
            <div className="belu-dis">
                <img src={reslogo7}alt="" className="blue-text"/>
                
                <div className="both">
                   <p className="over-world">Foodworld</p>
                <div className="star-six">
                    <img src={icon3} alt="" className="star"/>
                    <p className="tweenty-six">26</p>
                </div>
               </div>
            </div>
            <div>
                <button className="close-now"><p className="close">Opens Now</p></button>
            </div>
           </div>

    </div>
    </div>
    <div className="viewbuttondiv">
        <button className="viewwbutton">View All{">"} </button>
      </div>
   
    
    </div>
  )
}