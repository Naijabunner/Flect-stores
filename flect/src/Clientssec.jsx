import Clcontent from "./Clcontent";
const Clientsection = () => {
  return (
    <>
      <div className="client_desc">
        <p className="client_note">Here are some of our best clients.</p>
        <h2 className="client_note02">What People Say About Us</h2>
      </div>
      <div className="client_info_cont">
        <Clcontent />
        <Clcontent />
      </div>
    </>
  );
};

export default Clientsection;
