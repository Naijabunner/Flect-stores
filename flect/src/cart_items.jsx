const Cartitem = (props) => {   
  return (
    <>
      <section className="items_cont" >
        <div className="item_image_name">
        <img src={props.src} alt={props.alt}/>
          <p className="itemdesc"><strong>{props.name}</strong> <br />{props.Description}</p>
        </div>

        <p className="price">{props.price}</p>
        <div className="item_qty_cont">
          <p className="reduce_qty">-</p>
          <p className="qty_no">1</p>
          <p className="addqty">+</p>
        </div>
        <div className="total_cont">23456789</div>
        <p className="remove_i" ><i className="fa-solid fa-trash-can"></i></p>
        <button onClick={()=>props.check(props.id)}>345678</button>
      </section>
    </>
  );
};

export default Cartitem;
