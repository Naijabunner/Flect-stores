import { React, useState } from "react";
const Forgotpw = () => {
  const [option, setoption] = useState("");
  const [otpsent, setotpsent] = useState(false);
  const [useraddress, setuseraddress] = useState("");
  const [codevalid, setcodevalid] = useState(false);

  //  handling prefrence selsection submit
  const handleSubmit = (e) => {
    setoption(e.target.value);
    console.log(e.target.value);
    console.log(option);
  };

  // handing sending OTP btn
  const handleSendingotp = (e) => {
    e.preventDefault();
    setotpsent(true);
    const data = { useraddress };
    console.log(data);
  };

  ////handling validate otp
  const validateOtp = () => {
    setcodevalid(true)
  }
   

  ///slide for slection of prefrence
  const Options = () => {
    if (!otpsent) {
      return (
        <div className="forgotpw_option">
          <h2 className="forgotpw_text">Forgot password?</h2>
          <h3 className="selcect_retrieve">
            Choose a medium to retrieve your password
          </h3>
          <div className="option_btn">
            <input
              type="button"
              value="Phone number"
              className="Phoneno"
              onClick={handleSubmit}
            />
            <input
              type="button"
              className="email"
              value="Email Address"
              onClick={handleSubmit}
            />
          </div>
          <p>Don't have an account? Sign up</p>
        </div>
      );
    }
  };

  ////////otp slide
  const Otpslide = () => {
    return (
      <div className="otpSlide_cont">
        <h5>Enter OTP sent to {useraddress}</h5>
          <input type="number" required placeholder="OTP" />
          <a href="/Change-password"> <button> Reset</button></a>
      </div>
    );
  };

  /////change pw slide
  const Changepw = () => {};

  return (
    <>
      <div className="forgotpw_page">
        <h1 className="logo">
          <a href="/">FlecT</a>
        </h1>

        <div className="forgotpw_cont">
          {option && !otpsent ? (
            <div className="forgothead">
              <h4 className="instruction">
                Enter the {option} associated with your account and <br /> we'll
                send you a code to reset your password
              </h4>

              <form className="forgotpw_form" onSubmit={handleSendingotp}>
                <label className="forgotpw_input_label">{option}</label>
                <input
                  type={option === "Phone number" ? "number" : "text"}
                  className="forgotform_input"
                  value={useraddress}
                  onChange={(e) => setuseraddress(e.target.value)}
                />
                <button className="forgotpw_btn">Continue</button>
              </form>

              <p>Don't have an account? Sign up</p>
            </div>
          ) : (
            <Options />
          )}
          {option && otpsent && <Otpslide />}
        </div>
      </div>
    </>
  );
};

export default Forgotpw;
