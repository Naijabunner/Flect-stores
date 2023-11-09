import { useState } from "react";
import Usefetch from "./usefetch";

const Lpbrands = (props) => {
  const pickedItems = props.pickedItems
  const url ="http://localhost:8000/items/" + props.id
  const [btnclick, setbtnclick] = useState(props.added)

  const thisData =
    {
      name: props.name,
      Description: props.Description,
      price: props.price,
      qty: props.qty,
      id: props.id,
      src: props.src,
      alt:props.alt,
      added: btnclick
    }
    console.log(thisData)
    console.log(url)

  const addedToCartDataUpdate=()=>{
    fetch(url,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(thisData),
      }).then((res) => {
       if (res.status === 500) {
         throw Error("same id");
       }else{console.log("completed")
       
        }
        }).catch(err => {
          console.log(err.message);
        });
  }
  if (btnclick === true) {
    setTimeout(() => {
    addedToCartDataUpdate()
      
    }, 2000);
  }
    return (
      <div className="lpbrands_cont">
        
          <img
            src={props.src}
            alt={props.alt}
          />

        <div className="lpbrands_info">
          <h3>{props.name} </h3>
          <aside> <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
          </aside>
          <div className="prices">
            <p className="oldprice"><s>{props.price}</s></p>
            <p className="newprice">{props.price}</p>
          </div>
        </div>
        <div className="addCrt"  onClick={()=>{props.handle_addtocart(props.id)
          setbtnclick(true)}}>
            {btnclick?<div className="control_qty">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        :<button >Add to Cart</button>}
        </div>
        
      </div>
    );
}
 
export default Lpbrands;