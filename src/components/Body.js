import { Outlet } from "react-router-dom";
import Scroll from "./Scroll";
import Header from "./Header";
import Footer from "./Footer";

const Body=()=>{
    /*
        SCROLL
        CardCOntainer
         -Cards
        Footer
     */

    return (
        <>
       <Header/>
        <div className="mx-32">
            <Scroll/>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}
export default Body;