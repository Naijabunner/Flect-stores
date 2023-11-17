import { useEffect, useState } from "react";
import Addreducebtn from "./addReduceBtn";
const Lpbrands = (props) => {
  const pickedItems = props.pickedItems
  const url ="http://localhost:8000/items/" + props.id
  const pickedurl ="http://localhost:8000/picked_items/" + props.id
  const [btnclick, setbtnclick] = useState(props.added)
  const picked = props.picked
  const alldata =picked.filter(alldata=> alldata.id== props.id)
  const ppl = alldata[0]
  
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

  const addedToCartDataUpdate=(updatedData)=>{
    fetch(url,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }).then((res) => {
       if (res.status === 500) {
         throw Error("same id");
       }else{console.log("completed")
       
        }
        }).catch(err => {
          console.log(err.message);
        });
  }
  useEffect(()=>{
if (btnclick === true) {
    setTimeout(() => {
    addedToCartDataUpdate(thisData)
      
    }, 2000);
  }
  }, [btnclick])
  
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
            {!btnclick && <button className="addTOCartBtn">Add to Cart</button>}
        </div>
        {btnclick && <Addreducebtn url={url}
        thisData ={thisData}
        pickedurl= {pickedurl}
        allPickedId = {props.allPickedId}/>}
      </div>
    );
}
 
export default Lpbrands;