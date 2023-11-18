import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import{ BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Register from "./Register";
import Forgotpw from "./Forgotpw.";
import Changepw from "./Changepw";
import Maincart from "./main_cart";
import Usefetch from "./usefetch";
const App = () => {
  const loggedin = false
  const [navIsvisible, SetnavIsvisible] = useState(false)
  const {data, ispending, error}= Usefetch("http://localhost:8000/items");
  const {data:picked}= Usefetch("http://localhost:8000/picked_items");
 const [useData, setuseData]= useState(0)
 
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/picked_items");
      console.log(response)
      const result = await response.json();
      setuseData(result.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); 
  const handleDocumentclick=(e)=>{
    e.target.parentElement.className === "ham_nav"?SetnavIsvisible((nav)=>!nav):SetnavIsvisible(false)
  }
  const allPickedId=[]
  const roundUpPickedItemsId=(arr)=>{
    
  for (let i =0; i < arr.length; i++) {
    if (arr[i].id) {
      allPickedId.push(arr[i].id)
      
    }
  }
return allPickedId
}
const finishroundUpPickedItemsId = roundUpPickedItemsId(picked)


  const handle_addtocart = (id) => {
    const alldata =data.filter(alldata=> alldata.id== id)
    if (finishroundUpPickedItemsId.includes(id)) {
       console.log(finishroundUpPickedItemsId)
    } else {
      fetch("http://localhost:8000/picked_items",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(...alldata),
      }).then((res) => {
       if (res.status === 500) {
         throw Error("same id");
       }else{console.log("completed")
       
        }
        }).catch(err => {
          console.log(err.message);
        });
    }
    fetchData();
     };
  
  
  return (
    <>
    <Router>
      <div className="app" onClick={handleDocumentclick}>
        <Routes>
            <Route path="/" element={<Homepage
            loggedin={loggedin}
            navIsvisible={navIsvisible}
            handle_addtocart={handle_addtocart}
            pickedItems={finishroundUpPickedItemsId}
            picked ={picked}
            thisallPickedId ={allPickedId}
            pickedLength={useData>0?useData:picked.length}/>} />
            <Route path ="/Login" element={<Login />} />
            <Route path ="/Register" element={<Register />} />
            <Route path ="/Forgot-password" element={<Forgotpw />} />
            <Route path ="/Change-password" element={<Changepw />} />
            <Route path ="/cart" element={<Maincart
            navIsvisible={navIsvisible}
            pickedLength={picked.length}/>}  />
        </Routes>
          </div>
    </Router>
    
    </>
  );
}
 
export default App;