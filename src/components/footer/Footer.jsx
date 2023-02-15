import "./footer.scss"

export default function Footer(){

    return(
        <div className="footer" id="ftr">
            <div className="footerWrapper">
               <div className="first">
                   <div className="address">
                       <ul className="addressItems">
                           <li className="addressItem">Address</li>
                           <li className="addressItem">ALC Campus</li>
                           <li className="addressItem">Powdermill Road,Pamplemousses</li>
                           <li className="addressItem">Mauritius </li>
                       </ul>
                   </div>
                   <div className="contacts">
                       <span>For any queries contact us on:</span>
                       <ul>
                           <li>+230 584 7209</li>
                           <li>d.gondo@alustudent.com</li>
                       </ul>

                   </div>
               </div>
                <span className="second">SMT Inc .All Rights Reserved</span>

            </div>
        </div>
    )

}