import { useNavigate } from "react-router-dom";

const Emptycart = () => {
    const navigate =useNavigate()

    const handlesubmit_csbtn=()=>{
        navigate("/")
    }
    return ( <>
    <div className="emptycart_cont">
    <header className="emptycart_txt">
        Your cart is empty
    </header>
    <img src="src\assets\person-shopping.jpg" alt="Empty cart image" />
        <button className="countinue_shoppingbtn" onClick={handlesubmit_csbtn}>Contiue Shopping</button>
    </div>
    
    </> );
}
 
export default Emptycart;