import "./styles.scss"
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ServiceCart from "../components/serviceCart/ServiceCart";
import Carts from "../components/serviceCart/Carts";
import Hero from "../components/hero/Hero";
import About from "../components/about/AboutUs";

export default function Home(){
    return(

        <>
            <Navbar/>
            <Hero/>
            <Carts/>
            <About/>
            <Footer/>
        </>
    )
}