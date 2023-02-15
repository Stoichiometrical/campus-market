import "./chat.scss"
import {ArrowBack} from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';

export default function OpenChat(props){
    return(
           <div className="openWrapper">
                <div className="topBar">
                    <ArrowBack className="backarrow"/>
                    <img src="https://images.pexels.com/photos/14598135/pexels-photo-14598135.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="topImg" alt="Photo Missing"/>
                    <span className="topName">David Maliz</span>
                </div>
                <div className="chatSpace">
                    <div className="messagebar">
                        <div className="message recieved">Hello, can l come now?</div>
                        <div className="message sent">Yes, come in 10 minutes</div>
                    </div>
                    <div className="textInput">
                        <textarea  className="writeMessage" placeholder="Type message here"/>
                        {/*<SendIcon/>*/}
                        <span className="send">Send</span>
                    </div>
                </div>
           </div>
    )
}