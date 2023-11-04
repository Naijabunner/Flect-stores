import Navbar from "./Navbar";
import Home from "./Home";
import Brands from "./Brands";
import Clientsection from "./Clientssec";
import Latestproducts from "./latestproducts";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
const Homepage = (props) => {

    return ( 
      
        <>
         <div className="lander">
              <Navbar loggedin={props.loggedin}
              Isvisible={props.navIsvisible}/>
              <Home />
            </div>
            <div className="section_two">
              <Brands />
              <Latestproducts />
              <Clientsection />
              <Newsletter />
              <Footer/>
            </div>
        </>
    );
}
 
export default Homepage;