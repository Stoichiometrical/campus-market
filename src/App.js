import Home from "./pages/Home";
import ProductUpload from "./components/productUpload/ProductUpload";
import Chats from "./pages/Chats";
import OpenChat from "./components/chat/OpenChat";
import Login from "./pages/Login";
import {HashRouter as Router, Switch, Route, Routes, Link, Navigate} from "react-router-dom";
import Register from "./pages/Register";
import StoreBackend from "./pages/StoreBackend";
import UploadProduct from "./pages/UploadProduct";


export default function App(){
    return(
        <>
            {/*Setting up routes*/}
            <Router>
                <Routes>
                    <Route exact  path="/">
                        <Route index element={ <Home/> } />
                        <Route path = "home" element={ <Home/> } />
                        <Route path = "login" element={ <Login/> } />
                        <Route path = "register" element={ <Register/> } />
                        <Route path="chats" element={ <Chats/> }/>
                        <Route path="chats/1" element={ <OpenChat/> }/>
                        <Route path="store" element={ <StoreBackend/> }/>
                        <Route path="store/upload" element={ <UploadProduct/> }/>
                    </Route>
                    <Route exact path="/chat">
                    </Route>
                </Routes>
            </Router>
        </>
    )
}