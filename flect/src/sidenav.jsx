
const Sidenav = (props) => {
    return ( <>
     <div className="side_nav" id={props.Isvisible?"ham_nav_visible":"ham_nav_notvisible"}>
        
        <ul className="" >
        
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Brands <i className="fa-solid fa-angle-down" id="nav_arrow"></i></a>
                   </li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/Register">SignIn/SignUp</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                </div>
    </> );
}
 
export default Sidenav;