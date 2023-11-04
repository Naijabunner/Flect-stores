import Cart from "./cart";
import Navbar from "./Navbar";
import Emptycart from "./empty_cart";
import Footer from "./Footer";
const Maincart = (props) => {
    const picked_items = [
        // {
        //   name: "Apple Smart watch",
        //   Description: "Apple Smart watch",
        //   price: "$12345",
        //   qty: "1",
        //   id: "1",
        //   src: "./src/assets/edited-pic_prev_ui (1).png",
        //   alt: "",
        // },
        // {
        //   name: "Apple Smart watch",
        //   Description: "Apple Smart watch",
        //   price: "$12345",
        //   qty: "1",
        //   id: "4",
        //   src: "./src/assets/edited-pic_prev_ui (1).png",
        //   alt: "",
        // },
        // {
        //   name: "Apple Smart watch",
        //   Description: "Apple Smart watch",
        //   price: "$12345",
        //   qty: "1",
        //   id: "2",
        //   src: "./src/assets/edited-pic_prev_ui (1).png",
        //   alt: "",
        // },
        // {
        //   name: "Apple Smart watch",
        //   Description: "Apple Smart watch",
        //   price: "$12345",
        //   qty: "1",
        //   id: "3",
        //   src: "./src/assets/edited-pic_prev_ui (1).png",
        //   alt: "",
        // },
      ];
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
      {picked_items.length === 0 ?<Emptycart/>:<Cart picked_items={picked_items}/>}
      <Footer/>

    </> );
}
 
export default Maincart;