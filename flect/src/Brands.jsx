

const Brands = () => {
    return (
      <div className="brand_container">
        <ul>
          <li>
            <div className="brand">
              <img
                className="brand_img"
                src=".\src\assets\brandAssets\apple-watch-series7-black-myshop-pk-1-removebg-preview 1.png"
                alt=""
              />
              <div className="brands_desc">
                <h2>Apple</h2>
                <p>
                  Apple is one of the <br />
                  most famous smart
                  <br /> watches providing company.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="brand">
              <img
                className="brand_img"
                src=".\src\assets\brandAssets\xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.png"
                alt=""
              />
              <div className="brands_desc">
                <h2>Xiaomi</h2>
                <p>
                  Xiaomi smart watches <br />
                  are produced by MI company.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="brand">
              <img
                className="brand_img"
                src=".\src\assets\edited-pic_prev_ui (1).png"
                alt=""
              />
              <div className="brands_desc">
                <h2>FitBit</h2>
                <p>
                  FitBit smart watches <br />
                  are best for their
                  <br /> health and fitness features
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
}
 
export default Brands;
