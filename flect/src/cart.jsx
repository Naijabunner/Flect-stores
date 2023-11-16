import Cartitem from "./cart_items";
import Checkout from "./checkout";
const Cart = (props) => {
  console.log(props)
  const picked_item = props.picked_items
  const cartItems = picked_item.map((allpicked_items) => {
    return <Cartitem key={allpicked_items.id} {...allpicked_items} 
    />;
  });

  return (
    <>
     <div className="picked_items">
        <h6>CART</h6>
        <p className="cart_no">(1)</p>
      </div>
      {cartItems}
      <Checkout />
    </>
     
  );
};

export default Cart;
