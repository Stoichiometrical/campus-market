import "./navbar.scss"
import {useNavigate} from "react-router-dom";
import { Link } from 'react-scroll';


export default function Navbar(){
    const services = useNavigate()
    const login = useNavigate()
    const log = ()=>{
        login("/login")
    }

    return(
        <div className="navbar">
            <div className="navWrapper">
                <span className="logo">Campus Market</span>
                <div className="navElementsWrapper">
                    <ul className="navElements">
                        <li className="navElement" id="service"><Link to="crt" smooth={true}>Services</Link></li>
                        <li className="navElement"><Link to="abt" smooth={true}>About Us</Link></li>
                        <li className="navElement"><Link to="ftr" smooth={true}>Contact Us</Link></li>
                    </ul>
                </div>
                <span className="icon" onClick={log}>LogIn</span>

            </div>

        </div>
    )
}