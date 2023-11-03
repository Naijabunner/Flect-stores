import { useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import{ BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Register from "./Register";
import Forgotpw from "./Forgotpw.";
import Changepw from "./Changepw";
import Maincart from "./main_cart";
const App = () => {
  const [navIsvisible, SetnavIsvisible] = useState(false)
  const handleDocumentclick=(e)=>{
    e.target.parentElement.className === "ham_nav"?SetnavIsvisible((nav)=>!nav):SetnavIsvisible(false)
    console.log(e.target.parentElement.className)
  }
    // const handleNavisvisible =(e)=>{
        
    //     console.log(e.target.parentElement.className)
    // }
  const loggedin = false
  return (
    <>
    <Router>
      <div className="app" onClick={handleDocumentclick}>
        <Routes>
            <Route path="/" element={<Homepage
            loggedin={loggedin}
            navIsvisible={navIsvisible}/>} />
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