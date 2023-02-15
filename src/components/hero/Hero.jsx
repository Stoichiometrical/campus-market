import "./hero.scss"
import Navbar from "../navbar/Navbar";
import background from "./im5.jpg"
import {Link } from "react-scroll"

export default function Hero(){
    return(

        <>
            <div className="hero">
                <div className="heroWrapper" style={{ backgroundImage: `url(${background})` }}>
                    <h1 className="title">CAMPUS MARKET</h1>
                    <h5 className="smalltext">All campus merchants in a click</h5>
                    <span className="smalltext2">Buy | Sell | Pay </span>
                    <span className="btnExplore"><Link to="crt">Explore</Link></span>
                </div>
                <div className="label">
                    <span className="l1">Products and Services</span>
                    </div>


            </div>

        </>
    )
}