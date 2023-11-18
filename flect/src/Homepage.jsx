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
              Isvisible={props.navIsvisible}
              pickedLength= {props.pickedLength}/>
              <Home />
            </div>
            <div className="section_two">
              <Brands />
              <Latestproducts handle_addtocart={props.handle_addtocart} pickedItems={props.pickedItems} 
              picked ={props.picked}
              allPickedId = {props.thisallPickedId}/>
              <Clientsection />
              <Newsletter />
              <Footer/>
            </div>
        </>
    );
}
 
export default Homepage;