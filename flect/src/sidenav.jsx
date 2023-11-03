
const Sidenav = (props) => {
    console.log(props.Isvisible)
    return ( <>
     <div className="side_nav">
        
        <ul className="" id={props.Isvisible?"ham_nav_visible":"ham_nav_notvisible"}>
        
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Brands <i className="fa-solid fa-angle-down" id="nav_arrow"></i></a>
                   </li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/Register">SignIn/SignUp</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
                </div>
    </> );
}
 
export default Sidenav;