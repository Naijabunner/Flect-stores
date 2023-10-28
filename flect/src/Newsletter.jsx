import Footer from "./Footer";

const Newsletter = () => {
    return (
         <div className="newsletter_cont">
            <div className="newsletter">
            <div className="Nw_form_cont">
                <div className="Nw_label">
                    <h1 className="Nw_head">
                        Subscribe To Newsletter
                    </h1>
                    <p className="Nw_p">
                        Get free guide about smart watches daily.
                    </p>
                </div>
                <form action="" className="Nw_form">
                    <input type="text" placeholder="Enter Email Adress" />
                    <button>Subscribe</button>
                </form>
            </div>
            <img src=".\src\assets\brandAssets\6426000_sd-removebg-preview 1.png" alt="" />
            
            </div>
            <Footer/>
    </div> 
    );
}
export default Newsletter;
