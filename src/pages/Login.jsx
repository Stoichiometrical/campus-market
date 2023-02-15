import "./styles.scss"
import {useNavigate} from "react-router-dom";

export default function Login(){
    const login = useNavigate()
    const log = ()=>{
        login("/home")
    }
    return(
        <>
            <div className ="register login">
                <div className="registerWrapper">
                    <h1>Campus Market</h1>
                    <span className="text">Welcome Back!</span>
                    <div className="form">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                       <span className="btnContainer"><button type="submit" value="submit" onClick={log}>Log In</button></span>
                    </div>

                    <span className="btm-txt" >Forgot Password?</span>
                </div>

            </div>

        </>
    )
}