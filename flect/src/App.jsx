import { useState } from "react";
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
  const [complete, setCompleted] = useState(false)
  const {data, ispending, error}= Usefetch("http://localhost:8000/items");
  const {data:picked}= Usefetch("http://localhost:8000/picked_items");
console.log(picked)



  const handleDocumentclick=(e)=>{
    e.target.parentElement.className === "ham_nav"?SetnavIsvisible((nav)=>!nav):SetnavIsvisible(false)
  }
  const roundUpPickedItemsId=(arr)=>{
    const allPickedId=[]
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
            picked ={picked}/>} />
            <Route path ="/Login" element={<Login />} />
            <Route path ="/Register" element={<Register />} />
            <Route path ="/Forgot-password" element={<Forgotpw />} />
            <Route path ="/Change-password" element={<Changepw />} />
            <Route path ="/cart" element={<Maincart
            navIsvisible={navIsvisible}/>} />
        </Routes>
          </div>
    </Router>
    
    </>
  );
}
 
export default App;