import Homepage from "./Homepage";
import Login from "./Login";
import{ BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Register from "./Register";
import Forgotpw from "./Forgotpw.";
import Changepw from "./Changepw";
const App = () => {
  
  const loggedin = false
  return (
    <>
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<Homepage
            loggedin={loggedin}/>}/>
            <Route path ="/Login" element={<Login />} />
            <Route path ="/Register" element={<Register />} />
            <Route path ="/Forgot-password" element={<Forgotpw />} />
            <Route path ="/Change-password" element={<Changepw />} />
        </Routes>
          </div>
    </Router>
    
    </>
  );
}
 
export default App;