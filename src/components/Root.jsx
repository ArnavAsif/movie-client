import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;