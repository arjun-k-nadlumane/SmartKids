import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import "./TravelPlanner.css"
import man from '../../assets/man (1).png'
const TravelPlanner = () => {

    useEffect(() => {
        let mandive = document.getElementById('manbg')
        window.addEventListener("scroll", () => {
            let value = window.scrollY;
            try {
                mandive.style.marginTop = value * 0.8 + 'px';
            } catch (error) {
                console.log(error);
            }
        })
    }, [])
    return (
        <motion.div className='TravelPlanner' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
            <div className='planner1'>
                <h3 className='gd-text'>Ready for the Adventure??? <br /> Lets strart planning!!</h3>
                <form>
                    <div>
                        <input type="text" name="name" class="question" id="nme1" required autocomplete="off" />
                        <label for="nme1"><span>Starting Point</span></label>
                    </div>
                    <div>
                        <input type="text" name="name" class="question" id="nme2" required autocomplete="off" />
                        <label for="nme2"><span>Destination</span></label>
                    </div>
                    <div>
                        <input type="text" name="name" class="question" id="nme3" required autocomplete="off" />
                        <label for="nme3"><span>Number of days</span></label>
                    </div>
                    <div>
                        <input type="text" name="name" class="question" id="nme4" required autocomplete="off" />
                        <label for="nme4"><span>Number of nights</span></label>
                    </div>
                    <div>
                        <input type="text" name="name" class="question" id="nme5" required autocomplete="off" />
                        <label for="nme5"><span>Travel mode</span></label>
                    </div>
                    <div>
                        <input type="text" name="name" class="question" id="nme6" required autocomplete="off" />
                        <label for="nme6"><span>Budget</span></label>
                    </div>
                </form>
                <img src={man} alt="" id='manbg' className='floating' />
            </div>
            <div className='planner2'>
            </div>
        </motion.div>
    )
}

export default TravelPlanner
