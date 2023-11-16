import { useState, useEffect } from "react";
const Cartitem = (props) => {  
  const pickedurl = "http://localhost:8000/picked_items/" + props.id
  const url ="http://localhost:8000/items/" + props.id
const [usedata, setuseData] = useState(null);

useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch(pickedurl);
      console.log(response)
      const result = await response.json();
      setuseData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const increaseVariable = () => {
    const updatedData = { ...usedata, qty: usedata.qty + 1 };
    console.log(updatedData)
    updateData(pickedurl, updatedData);
    fetchData()
    
  };
  const decreaseVariable = () => {
    if (usedata.qty > 1) {
       const updatedData = { ...usedata, qty: usedata.qty - 1 };
    console.log(updatedData)
    updateData(pickedurl, updatedData);
    fetchData() 
    }  
  };

  const removePIckedIsTrue =()=>{
    const updatedData = { ...usedata, added: false };
    updateData(url, updatedData);
  }
  const updateData = async (theUrl, updatedData) => {
    try {
      const response = await fetch(theUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setuseData(updatedData);
      } else {
        console.error('Error updating data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

   const handleClick=()=>{
    fetch(pickedurl,{
      method: 'DELETE'
    }).then(()=>{
      removePIckedIsTrue()
      location.reload()
      console.log("dELETED")
    })
   }
  return (
    <>
      <section className="items_cont" >
        <div className="item_image_name">
        <img src={props.src} alt={props.alt}/>
          <p className="itemdesc"><strong>{props.name}</strong> <br />{props.Description}</p>
        </div>

        <p className="price">{"$" +props.price}</p>
        <div className="item_qty_cont">
        <button onClick={decreaseVariable}>-</button>
          {usedata ? (
          <p>{usedata.qty}</p>
          ) : (
        <p>...</p>
      )}
          <button onClick={increaseVariable}>+</button>
        </div>
        <div className="total_cont">{usedata ? (
          <p>{Number(usedata.qty) * props.price}</p>
          ) : (
        <p>...</p>
      )}</div>
        <p className="remove_i" onClick={handleClick}><i className="fa-solid fa-trash-can"></i></p>
      </section>
    </>
  );
};

export default Cartitem;
