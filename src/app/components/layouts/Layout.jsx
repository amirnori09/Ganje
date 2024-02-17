import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
const LayoutPublic = ({ children }) => {
  return (
    <div>
        <Nav />
        {children}
        <Footer />
    </div>
  );
};

export default LayoutPublic;
