import "./servicecart.scss"

export default function ServiceCart(props){
    return(
        <div className="service">
            <div class="serviceWrapper">
                <img src={props.img} alt="Error"/>
                <div className="text">
                    <h2>{props.name}</h2>
                </div>
            </div>
        </div>
    )
}