import Lpbrands from "./Lpbrands";
import Usefetch from "./usefetch";

const Latestproducts = (props) => {
    const {data, ispending}= Usefetch( "http://localhost:8000/items")
    const allitems_mapped =data.map((alldata)=>{
        return(
            <Lpbrands key={alldata.id} {...alldata} handle_addtocart={props.handle_addtocart} pickedItems={props.pickedItems}/>
        )
    })
    return ( 
        <div className="latestproducts">
                    <div className="latestproducts_title">
            <p id="recent_products">Find your favourite smart watch.</p>
            <h3>Our Latest Products</h3>
        </div>
        <div className="brand_container">
        <div className="test">
        {allitems_mapped}

            </div>
        </div>
        
        </div>

     );
}
 
export default Latestproducts;