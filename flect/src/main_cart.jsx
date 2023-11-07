import Cart from "./cart";
import Navbar from "./Navbar";
import Emptycart from "./empty_cart";
import Footer from "./Footer";
import Usefetch from "./usefetch";

const Maincart = (props) => {
  const {data, ispending}= Usefetch( "http://localhost:8000/picked_items")

// getting id onclick
  const check =(id)=>{
  console.log(id)
}
    const Freeshippin_txt = () => {
        return (
          <>
            <div className="freeshipping_txt">
              Enjoy free shipping on all orders with code FREESHIP.
            </div>
          </>
        );
      };
    return ( <>
    <div className="cart_page">
      <header className="navheader">
        <Navbar Isvisible={props.navIsvisible}/>
      </header>
      <Freeshippin_txt />
      </div>
      {data.length === 0?<Emptycart ispending={ispending}/>:<Cart picked_items={data}
      check={check}/>}
      <Footer/>
    </> );
}
 
export default Maincart;