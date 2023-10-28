import Footer from "./Footer";
const Register = () => {
  return (
    <>
      <div className="sign_page">
        <div className="Rdesign_cont" id="Rone"></div>
        <div className="Rdesign_cont" id="Rtwo"></div>
        <div className="Rdesign_cont" id="Rthree"></div>
        <div className="Rdesign_cont" id="Rfour"></div>
        <div className="Rdesign_cont" id="Rfive"></div>
        <div className="Rdesign_cont" id="Rsix"></div>
        <a href="/">
          <h1 className="logo">FlecT</h1>
        </a>
        <div className="reg_cont">
          <h1 className="reg_title">Sign Up</h1>
          <form className="sign_form">
            <div className="Reg_form">
              <label>First name</label>
              <div className="Rusername_div">
                <input type="text" placeholder="First name" />
              </div>
              <label>Last name</label>
              <div className="Rusername_div">
                <input type="text" placeholder="Last name" />
              </div>
              <label>Email</label>
              <div className="Rusername_div">
                <input type="email" placeholder="Enter your Email" />
              </div>
              <label>Username</label>
              <div className="Rpassword_div">
                <input type="text" placeholder="Enter your Username" />
              </div>
              <label> Phone number</label>
              <div className="Rpassword_div">
                <input type="tel" placeholder="Enter your password" />
              </div>
              <label>Address</label>
              <div className="address_div">
                <label> House No</label>
                <input type="number" placeholder="House no" className="house_no" />
                <label>Street name </label>
                <input type="" placeholder="Street name" />
                <label>Nearest bus stop</label>
                <input type="" placeholder="Nearest bus stop" />
                <label> State</label>
                <input type="" placeholder="State" />
                <label> Country</label>
                <input type="" placeholder="Country" />
              </div>
              <label> Password</label>
              <div className="Rpassword_div">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Enter your password" />
              </div>
              <label>Confirm Password</label>
              <div className="Rpassword_div">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>
            <button className="login_btn">CREATE ACCOUNT</button>
          </form>
          <div className="signuinopton_div">
            <a href="/Login" id="return_login">Already got an account? Sign in</a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
