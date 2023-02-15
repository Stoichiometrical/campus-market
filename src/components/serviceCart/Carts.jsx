import "./servicecart.scss"
import ServiceCart from "./ServiceCart";


const data ={
    skills : {
        sk1 :{
            im : "assets/im2.jpg",
            label : "Food"
        },
        sk2 :{
            im : "assets/im6.jpg",
            label : "Taxis"
        },
        sk3 :{
            im : "https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            label : "Community"
        },
        sk4 :{
            im : "assets/im7.jpg",
            label : "Clothing"
        },
        sk5 :{
            im : "https://images.pexels.com/photos/10784645/pexels-photo-10784645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            label : "General Items"
        },
    }
}

export default function Carts(){
    return(

        <>
            <div className="carts" id="crt">
                <ServiceCart img="https://images.pexels.com/photos/2973392/pexels-photo-2973392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Skills"/>
                <ServiceCart img={data.skills.sk5.im} name={data.skills.sk5.label} />
                <ServiceCart img={data.skills.sk2.im} name={data.skills.sk2.label} />
                <ServiceCart img={data.skills.sk1.im} name={data.skills.sk1.label} />
                {/*<ServiceCart img={data.skills.sk3.im} name={data.skills.sk3.label} />*/}
                <ServiceCart img={data.skills.sk4.im} name={data.skills.sk4.label} />

            </div>

        </>
    )
}