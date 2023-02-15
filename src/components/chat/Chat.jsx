import "./chat.scss"

export default function Chat(props){

    return(
        <div className="chat">
            <div className="chatWrapper">
                <img src={props.image} alt="Error"/>
                <div className="text">
                    <span className="title">{props.name}</span>
                    <div className="message">{props.message}</div>
                </div>
                <div className="chatCounter">
                    <span className="messageCount"> {props.count}</span>
                </div>



            </div>
        </div>
    )

}