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
                <nav>
                <i className="fa-solid fa-bars" id="bars"></i>
                </nav>

        </div>
        <div className="side_nav">
        <nav className="ham_nav">
                <i className="fa-solid fa-bars"></i>
                </nav>
        <ul className="">
        
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Brands <i className="fa-solid fa-angle-down" id="nav_arrow"></i></a>
                   </li>
                    {/* <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">Home</a></li>

                    </ul>
                     */}
                    <li><a href="/">Recent products</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
                </div>
        </>
     );
}
 
export default Navbar;