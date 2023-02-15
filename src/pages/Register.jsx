import "./styles.scss"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const login = useNavigate()
    const loggingin = ()=>{
        login("/login")
    }
    const home = useNavigate()
    const createAccount = ()=>{
        home("/home")
    }
    return(
        <>
            <div className ="register">
                <div className="registerWrapper">
                    <h1>Campus Market</h1>
                    <span className="text">Create an account</span>
                    <div className="form">
                        <input type="text" placeholder="Full name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <span className="btnContainer"><button type="submit" value="submit">Create Account</button></span>
                    </div>

                    <span className="btm-txt" onClick={ loggingin}>Already have an account?Login</span>
                </div>

            </div>

        </>
    )
}