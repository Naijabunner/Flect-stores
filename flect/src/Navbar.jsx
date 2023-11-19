import Sidenav from "./sidenav";
const Navbar = (props) => {
    
    
    return ( 
        <>
        <div className="header">
            <h1>
                FLECT
            </h1>
                <ul className="links">
                    <li><a href="/">Home</a></li>
                    <li className="brands"><a href="/">Brands <i className="fa-solid fa-angle-down" id="nav_arrow"></i></a>
                 <ul className="dropdown">
                   <li><a href="/">Apple</a></li>
                   <li><a href="/">Xiaomi</a></li>
                   <li><a href="/">FitBit</a></li>
                   <li><a href="/">Samsung</a></li>
                    </ul>
                   </li>
                    <li><a href="#recent_products">Recent products</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <ul className="icons_links">
                    <li><a href="/"></a><i className="fa-brands fa-searchengin" id="Navbar_search_btn"></i></li>
                    <li><a href={props.loggedin?"/":"/Login"}><i className="fa-solid fa-user"></i></a></li>
                    <li ><a href="/cart" >
                        <div className="cart_btn">
                        <i className="fa-solid fa-cart-shopping" ></i><p>{props.pickedLength}</p>
                            </div>
                            </a></li>
                </ul>
                <nav className="ham_nav" >
                <i className={!props.Isvisible?"fa-solid fa-bars":"fa-solid fa-x"}  ></i>
                </nav>
            <Sidenav 
            Isvisible={props.Isvisible}/>  
        </div>
        </>
     );
}
 
export default Navbar;