import React from 'react'
// import { Background, Parallax } from 'react-parallax'
import './Types.css'
import { motion } from 'framer-motion'
import rafting from '../../assets/Rafting.mp4'
import separtor from '../../assets/separate.png'
import skydiving from '../../assets/sky diving.mp4'
const AdventureTypes = () => {
    return (
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.5 }} >
            <div className="AdventureTypes" >
                <div className="heading">
                    Popular Adventures
                </div>
                <div className="ad-cards">
                    <div className="card">
                        <div className="video-container">
                            <video src={rafting} loop autoPlay muted />
                        </div>
                        <img src={separtor} alt="" />
                        <div className="ad-desc">
                            <span className="title">Rafting</span>
                            <div className='subtitle'>"Let's paddle away from our problems and into the adventure!"</div>
                            <button className='know-more'>Know more</button>
                        </div>
                    </div>
                    <div className="card altc">
                        <div className="video-container">
                            <video src={skydiving} loop autoPlay muted />
                        </div>
                        <img src={separtor} alt="" />
                        <div className="ad-desc">
                            <span className="title">Skydiving</span>
                            <div className='subtitle'>"Let's paddle away from our problems and into the adventure!"</div>
                            <button className='know-more'>Know more</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="video-container">
                            <video src={rafting} loop autoPlay muted />
                        </div>
                        <img src={separtor} alt="" />
                        <div className="ad-desc">
                            <span className="title">Rafting</span>
                            <div className='subtitle'>"Let's paddle away from our problems and into the adventure!"</div>
                            <button className='know-more'>Know more</button>
                        </div>
                    </div>
                    <div className="card altc">
                        <div className="video-container">
                            <video src={skydiving} loop autoPlay muted />
                        </div>
                        <img src={separtor} alt="" />
                        <div className="ad-desc">
                            <span className="title">Skydiving</span>
                            <div className='subtitle'>"Let's paddle away from our problems and into the adventure!"</div>
                            <button className='know-more'>Know more</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AdventureTypes
