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
                   <li><a href="/">Home</a></li>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">Home</a></li>

                    </ul>
                   </li>

                     
                    <li><a href="/">Recent products</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
                <ul className="icons_links">
                    <li><a href="/"></a><i class="fa-brands fa-searchengin" id="Navbar_search_btn"></i></li>
                    <li><a href={props.loggedin?"/":"/Login"}><i class="fa-solid fa-user"></i></a></li>
                    <li><a href="/cart"><i class="fa-solid fa-cart-shopping"></i>1</a></li>
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