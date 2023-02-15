import Navbar from "../components/navbar/Navbar";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import "./styles.scss"

export default function StoreBackend(){

    return(
        <>
        <Navbar/>
            <div className="storeWrapper">
                <span className="title">Welcome Back,David!</span>
                <div className="frow">
                    <div className="fitem1 itemBack">
                        <span className="ftext">Upload New Goods</span>
                        <FileUploadIcon className="fimg"/>
                    </div>

                    <div className="fitem2 itemBack">
                        <span className="ftext">Check Stock</span>
                        <ShoppingCartIcon className="fimg" />

                    </div>
                </div>
                <div className="srow">
                    <div className="itemBack">
                        <span className="stext">Preview Store</span>
                        <StorefrontIcon className="fimg" />
                    </div>

                </div>


            </div>
        </>
    )
}