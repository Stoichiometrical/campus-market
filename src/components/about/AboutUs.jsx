import "./about.scss"
import background from "../hero/im5.jpg";

export default function About() {
    return(
        <>
            <div className="about" id="abt">
                <div className="aboutWrapper">
                    <div className="text">ABOUT US</div>
                    <div className="section" style={{ backgroundImage: `url(${background})` }}>
                        <p className="aboutTxt " >Our mission to remove the hussle of looking all over campus for a person providing
                            service and make the process easier for everyone to easily sell
                            thier products or skills to a wide campus market without having
                            to go person by person</p>
                    </div>
                    <div className="features">FEATURES</div>
                    <div className="featuresItems">
                        <div className="item">Make secure payments</div>
                        <div className="item">Negotiate with customers and sellers over chat</div>
                        <div className="item">Showcase your products and skills</div>
                        <div className="item">Hassle free ordering</div>
                    </div>
                </div>
            </div>
        </>
    )
}