import Navbar from "../components/navbar/Navbar";
import Chat from "../components/chat/Chat";

export default  function Chats(){

    return(

        <>
            <Navbar/>
            <Chat name="David Gondo"  image="https://images.pexels.com/photos/7990458/pexels-photo-7990458.jpeg?auto=compress&cs=tinysrgb&w=600" message ="Good afternoon.Are you there?" count="1"/>
            <Chat name="Peter Marimi" image= "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600" message ="Can l come now?" count="3"/>
            <Chat name="James Peterson" image= "https://images.pexels.com/photos/1315741/pexels-photo-1315741.jpeg?auto=compress&cs=tinysrgb&w=600" message ="Is the food ready?. I will be leaving campus soon" count="2"/>
        </>
    )
}