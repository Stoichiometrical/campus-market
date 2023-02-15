import "./productup.scss"
import Navbar from "../navbar/Navbar";
import UploadIcon from '@mui/icons-material/Upload';
export default  function ProductUpload(){
    return(

        <>
        <Navbar/>
         <div className="product">
             <div className="productWrapper">
                 <span className="detailsTxt">Product Details</span>
                 <div className="productInputs">
                     <input type="text"  placeholder="Product Name" className="productInput"/>
                     <input type="text"  placeholder="Product Description" className="productInput"/>
                     <div className="section">
                         <h1>Product Varieties</h1>
                         <input type="text"  placeholder="Product Variety" className="productInput"/>
                     </div>
                     <div className="file">
                         <h4>Product Images</h4>
                         <input type="file" id = "images" style={{ display : "none"}} />
                         <label htmlFor="images"><UploadIcon  /></label>

                     </div>
                     <button type="button" className="productInput">Upload to Store</button>
                 </div>
             </div>
         </div>

        </>
    )


}