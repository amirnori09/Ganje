import { Providers } from "../Providers";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
const Layoutp = ({ children }) => {
    return ( 
    <div >
        <Providers>
        <Nav/>
        {children}
        <Footer/>
        </Providers>
    </div> 
     );
}
 
export default Layoutp;