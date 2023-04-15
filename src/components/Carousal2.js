import React from 'react'
import './Carousal2.css'
import { useEffect } from 'react'
const Carousal2 = () => {
    useEffect(()=>{
        var counter = 1;
        setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if(counter > 4){
            counter = 1;
          }
        }, 500);
    },[])
    return (
        <div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div class="slide first">
                        <img src="https://ik.imagekit.io/ngamedata/memories/jewellary/1661877236352_wJA5fp01G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884107642" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople8_L1I9_RuFC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881079573" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://ik.imagekit.io/ngamedata/memories/jewellary/1661877236352_wJA5fp01G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661884107642" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://ik.imagekit.io/ngamedata/memories/pre_couple/pre_cople8_L1I9_RuFC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661881079573" alt="" />
                    </div>
                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                </div>
                <div class="navigation-manual">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}

export default Carousal2