import Navbar from "../components/navbar/Navbar";
import "./styles.scss"
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function UploadProduct(){

    return(
        <>
        <Navbar/>
            <div className="upload">
                <div className="uploadWrapper">
                    <span className="title">Product Details</span>
                    <input type="text" className="inputItem" placeholder="Product Name"/>
                    <textarea className="inputItem" placeholder="Product Description"/>
                    <div className="productVar">
                        <input type="text" className="inputItem" placeholder="Enter the different product types"/>
                        <button className="btn">+</button>
                    </div>
                    <div className="itemBack">
                        <span className="ftext">Upload Product Images</span>
                        <FileUploadIcon className="fimg"/>
                    </div>
                    <button className="uploadBtn">Upload To Store</button>

                </div>

            </div>

        </>

    )
}