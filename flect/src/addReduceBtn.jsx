import { useEffect, useState } from "react";

const Addreducebtn = (props) => {
const pickedurl = props.pickedurl
const allPickedId = props.allPickedId
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
    updateData(updatedData);
    fetchData()
    
  };
  const decreaseVariable = () => {
    if (usedata.qty > 1) {
       const updatedData = { ...usedata, qty: usedata.qty - 1 };
    console.log(updatedData)
    updateData(updatedData);
    fetchData() 
    }
    
    
  };

  const updateData = async (updatedData) => {
    try {
      const response = await fetch(pickedurl, {
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



    return (
        <>
        <div className="control_qty">
          <button onClick={decreaseVariable}>-</button>
          {usedata ? (
          <p>{usedata.qty}</p>
          ) : (
        <p>...</p>
      )}
          <button onClick={increaseVariable}>+</button>
        </div>
        </>

     );
}

export default Addreducebtn;