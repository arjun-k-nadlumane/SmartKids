import React from 'react'
import preload from '../../assets/preload.mp4'
import './Preloader.css'
const Preloader = ({ loader }) => {
    return (
        <div>
            <div id="loader" style={{ display: loader }}>
                <video autoPlay muted>
                    <source src={preload} />
                </video>
                <div class="wrapper">
                    <span class="loader-text">The most Adventurous</span>
                    <div class="words">
                        <span>Treks</span>
                        <span>Trips</span>
                        <span>Sports</span>
                        <span>Camps</span>
                        <span>Life</span>
                    </div>
                </div>
                <div class="loading">
                    <span>Loading</span>
                    <div class="spinner"></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
