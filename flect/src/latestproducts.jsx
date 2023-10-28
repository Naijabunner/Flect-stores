import Lpbrands from "./Lpbrands";

const Latestproducts = () => {
    const Meat =()=>{
        return <div className="test">
            <Lpbrands/>
            <Lpbrands/>
            <Lpbrands/>
            <Lpbrands/>
            <Lpbrands/>
            <Lpbrands/>
        </div>
    }
    return ( 
        <div className="latestproducts">
                    <div className="latestproducts_title">
            <p>Find your favourite smart watch.</p>
            <h3>Our Latest Products</h3>
        </div>
        <div className="brand_container">
            <Meat/>
        </div>
        
        </div>

     );
}
 
export default Latestproducts;