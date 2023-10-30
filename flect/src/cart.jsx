import Navbar from "./Navbar";
import Cartitem from "./cart_items";
import Checkout from "./checkout";
const Cart = () => {
  const picked_items = [
    {
      name: "Apple Smart watch",
      Description: "Apple Smart watch",
      price: "$12345",
      qty: "1",
      id: "1",
      src: "./src/assets/edited-pic_prev_ui (1).png",
      alt: "",
    },
    {
      name: "Apple Smart watch",
      Description: "Apple Smart watch",
      price: "$12345",
      qty: "1",
      id: "1",
      src: "./src/assets/edited-pic_prev_ui (1).png",
      alt: "",
    },
    {
      name: "Apple Smart watch",
      Description: "Apple Smart watch",
      price: "$12345",
      qty: "1",
      id: "1",
      src: "./src/assets/edited-pic_prev_ui (1).png",
      alt: "",
    },
    {
      name: "Apple Smart watch",
      Description: "Apple Smart watch",
      price: "$12345",
      qty: "1",
      id: "1",
      src: "./src/assets/edited-pic_prev_ui (1).png",
      alt: "",
    },
  ];

  const cartItems = picked_items.map((allpicked_items) => {
    return <Cartitem key={allpicked_items.id} {...allpicked_items} />;
  });
  const Freeshippin_txt = () => {
    return (
      <>
        <div className="freeshipping_txt">
          Enjoy free shipping on all orders with code FREESHIP.
        </div>
      </>
    )
  };
  console.log({ ...picked_items });
  return (
    <div className="cart_page">
      <header className="navheader">
        <Navbar />
      </header>
      <Freeshippin_txt/>
      <div className="picked_items">
        <h6>
          CART
          </h6>
          <p className="cart_no">(1)</p></div>
      {cartItems}
      <Checkout />
    </div>
  );
};

export default Cart;
