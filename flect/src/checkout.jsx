const Checkout = () => {
  return (
    <section className="checkout_container">
      <section className="checkout_cont">
        <div className="subtotal">
          <h5 className="subtotal_txt">Subtotal:</h5>
          <p className="subtotal_price">12345623456789</p>
        </div>
        <form className="shipping_form">
          <div className="ship_form_labelinput">
            <label>Country</label>
            <input type="text" placeholder="Country" />
            <label>State/province</label>
            <input type="text" placeholder="State/province"/>
            <label>City</label>
            <input type="text" placeholder="City"/>
            <label>Zip/postcode</label>
            <input type="text" placeholder="Zip/postcode"/>
          </div>
          <div className="estimate_ship_btn">
          <button className="shipping_btn">ESTIMATE SHIPPING</button>
          </div>
        </form>
        <form className="couponCode">
          <label className="coupon_txt">Coupon Code:</label>
          <div className="coupon_input_btn">
            <input type="text" placeholder="Entet your coupon code" />
            <button className="coupon_btn">Apply</button>
          </div>
        </form>
        <div className="grndtotal_div">
          <h4 className="grandtotal_txt">Grand total:</h4>
          <p className="grndtotal_price">2345678</p>
        </div>
        <div className="checkout_btn_cont">
        <button className="checkout_btn">CHECKOUT</button>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
