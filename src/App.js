import Home from "./pages/Home";
import Chats from "./pages/Chats";
import OpenChat from "./components/chat/OpenChat";
import Login from "./pages/Login";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import StoreBackend from "./pages/StoreBackend";
import UploadProduct from "./pages/UploadProduct";


export default function App(){
    return(
        <>
            {/*Setting up routes*/}
            <Router>
                <Routes>
                        <Route index element={ <Home/> } />
                        <Route exact path = "/home" element={ <Home/> } />
                        <Route exact path = "/login" element={ <Login/> } />
                        <Route exact path = "/register" element={ <Register/> } />
                        <Route exact path="/chats" element={ <Chats/> }/>
                        <Route exact path="/chats/1" element={ <OpenChat/> }/>
                        <Route exact path="/store" element={ <StoreBackend/> }/>
                        <Route exact path="/store/upload" element={ <UploadProduct/> }/>
                        <Route exact path="/chat" />
                </Routes>
            </Router>
        </>
    )
}