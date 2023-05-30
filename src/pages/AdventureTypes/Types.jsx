import React, { useEffect } from 'react'
import './Types.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
const Types = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className='Types' data-aos="fade-down">
            <h1>Parachuting / Skydiving</h1>
            <div className="desc">
                <p>Parachuting, including also skydiving, is a method of transiting from a high point in the atmosphere to the surface of Earth with the aid of gravity, involving the control of speed during the descent using a parachute or parachutes.</p>
                <br />
                <p>For human skydiving, it may involve a phase of more or less free-falling (the skydiving segment) which is a period when the parachute has not yet been deployed and the body gradually accelerates to terminal velocity.</p>
                <br />
                <p style={{ textAlign: 'end' }} >Popular Skydive locations</p>
                <br />
                <ul>
                    <li> Interlaken, Switzerland </li>
                    <li> Sevilla, Spain </li>
                    <li> Hawaii, United States </li>
                    <li> Mount Everest, Nepal </li>
                    <li> Abu Dhabi & Dubai, UAE </li>
                    <li> Pattaya, Thailand </li>
                    <li> North Wollongong Beach, Australia </li>
                    <li> Fox Glacier, New Zealand </li>
                    <li> Cape Town, South Africa </li>
                    <li> Mauritius </li>
                </ul>
            </div>
        </div>
    )
}

export default Types
