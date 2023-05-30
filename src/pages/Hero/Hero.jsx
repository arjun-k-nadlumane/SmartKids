import React, { useEffect } from 'react'
import bg from '../../assets/bg.png'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
const Hero = ({ content }) => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate("/types")
    }
    useEffect(() => {
        const plx_el = document.querySelectorAll(".parallax-effect")
        let xVlaue = 0,
            yValue = 0;

        function reset() {
            plx_el.forEach((ele) => {
                let speedx = ele.dataset.speedx;
                let speedy = ele.dataset.speedy
                ele.style.transform = `translate(calc(-50% + ${-xVlaue * speedx}px), calc(-50% + ${yValue * speedy}px))`
            })
        }
        reset();
        window.addEventListener("mousemove", (event) => {
            xVlaue = event.clientX - window.innerWidth / 2;
            yValue = event.clientY - window.innerHeight / 2;
            reset();
        })
    },[])
    return (
        <div className='Hero'>
            <main id="content" style={{ display: content }}>
                {/* <!-- <div class="vin"></div> --> */}
                <img src={bg} alt="" class="parallax-effect bg" data-speedx="0.15" data-speedy="0.20" />
                <img src={bg4} alt="" class="parallax-effect bg4" data-speedx="0.12" data-speedy="0.17" />
                <img src={bg3} alt="" class="parallax-effect bg3" data-speedx="0.09" data-speedy="0.155" />
                <div class="text parallax-effect">
                    <h2>Ready for Adventure ?</h2>
                    <h1>Explore the Adventurous <br /> Trips</h1>
                </div>
                <img src={bg2} alt="" class="parallax-effect bg2" data-speedx="0.06" data-speedy="0.138" />
                <img src={bg1} alt="" class="parallax-effect bg1" data-speedx="0.03" data-speedy="0.095" />
                <button className="explore" onClick={navigateTo}>Explore</button>
            </main>
        </div>
    )
}

export default Hero
