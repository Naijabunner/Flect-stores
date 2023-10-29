import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Changepw = () => {
    const [pwone, setpwone] =useState("")
    const [pwtwo, setpwtwo] =useState("")
    const [displaypw, setdisplaypw]= useState(false)
    const [pwcorrect, setpwcorrect]=useState(false)
    const navigate =useNavigate()
     console.log(pwone)
     console.log(pwtwo)
     if (pwcorrect=== true) {
         setTimeout(() => {
             navigate("/Login")
         }, 3000);
     }
    const handleSubmitpw=(e)=>{
        e.preventDefault()
        setdisplaypw(false)
        pwone===pwtwo?setpwcorrect(true):setpwcorrect("dont match")
        
    };
    /////change succesfull slide
    const Changesuccess=()=>{
        return(
            <>
            <div className="successful_page">
                <h2 className="pw_change_success">
                    Your Account Reset Was succesfull
                </h2>
                <i className="fa-solid fa-check" id="checkbox_i"></i>
            <small>Redirecting.....</small>
            </div>
            </>
        )
        ////see password
      
    } 
    const handleDisplaypw =()=>{
        setdisplaypw((setdisplaypw)=>!setdisplaypw)
        console.log(displaypw)
       }
    return (  <>
    <div className="forgotpw_page">
        <h1 className="logo">
          <a href="/">FlecT</a>
        </h1>
        <div className="forgotpw_cont">
            
        {pwcorrect===true ?<Changesuccess />:<form onSubmit={handleSubmitpw}>
        <h2 className="confirm_pw">Reset Password</h2>
        <label>Password</label>
           <div className="inputfpw_cont">
            <input type={displaypw?"text":"password"}onChange={(e)=>setpwone(e.target.value)} required/>
            {!displaypw ?<i className="fa-regular fa-eye" id="see_pw" onClick={handleDisplaypw}></i>:
            <i class="fa-regular fa-eye-slash" onClick={handleDisplaypw}></i>}
            </div> 
            <label>Confirm Password</label>
           <div className="inputfpw_cont">
            <input type={displaypw?"text":"password"} onChange={(e)=>setpwtwo(e.target.value)} required/>
            {!displaypw ?<i className="fa-regular fa-eye" id="see_pw" onClick={handleDisplaypw}></i>:
            <i class="fa-regular fa-eye-slash" onClick={handleDisplaypw}></i>}
            </div> 
                <button className="changepw_btn">Continue</button>
        </form> }
        <p>{pwcorrect ==="dont match"?"Passwords don't match":""}</p>
        </div>
        </div>
    </>);
}
 
export default Changepw;