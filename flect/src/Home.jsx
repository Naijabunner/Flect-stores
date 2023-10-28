const Home = () => {
    return (
      <div className="home">
        {/* <div className="Rdesign_cont" id="Rone"></div>
        <div className="Rdesign_cont" id="Rtwo"></div>
        <div className="Rdesign_cont" id="RRthree"></div>
        <div className="Rdesign_cont" id="Rfour"></div> */}
        <div className="landing_text_cont">
          <div className="landing_text">

            <h1>Welcome <br />to the future of <br /> convenience and style</h1>
            <p>
              Explore our collection of cutting-edge smartwatches, <br />
              that seamlessly blend technology with fashion. <br /> Elevate your
              everyday with the perfect fusion of sound connectivity. <br /> Dive
              in and discover your next essential companion.
                </p>
              <div className="input_container">
                <i className="fa-solid fa-magnifying-glass" id="search_icon"></i>
                <input type="text" className="Search_input" placeholder="Find the best brands"/>
                <button className="landing_search_btn">Search</button>
              </div>
            
          </div>

             <img
              src=".\src\assets\new-smartwatch-balancing-with-hand-removebg-preview.png"
              alt="Hand touching smart watch"
            />   
        </div>
      </div>
    );
}
 
export default Home;