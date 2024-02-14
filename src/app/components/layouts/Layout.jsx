import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

const Layoutp = ({ children }) => {
    return ( 
    <div>
        <Nav/>
        {children}
        <Footer/>
    </div> 
     );
}
 
export default Layoutp;