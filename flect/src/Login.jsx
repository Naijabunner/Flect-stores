import Footer from "./Footer";
const Login = () => {
  return (
    <>
      <div className="sign_page">
        <div className="design_cont" id="one" ></div>
        <div className="design_cont" id="two"></div>
        <div className="design_cont" id="three"></div>
        <div className="design_cont" id="four"></div>
        <div className="design_cont" id="five"></div>
        <div className="design_cont" id="six"></div>

        <a href="/">
          <h1 className="logo">FlecT</h1>
        </a>

        <div className="login_cont">
          <h1 className="login_title">Sign In</h1>
          <form className="sign_form" >
            <label>Email/Username</label>
            <div className="username_div">
              <i className="fa-regular fa-user"></i>
              <input type="text" placeholder="Enter your email/username" />
            </div>
            <label> Password</label>
            <div className="password_div">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Enter your password" />
            </div>
            <a href="/Forgot-password" id="forgot_password">
            <p className="forgot_password">Forgot Password?</p>
            </a>
            <button className="login_btn">LOGIN</button>
          </form>
          <div className="signupOpton_div"><a href="/Register" id="register_link">Don't have an account? Sign up</a></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
