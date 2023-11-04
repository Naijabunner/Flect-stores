const Footer = () => {
    return (
      <>
        <section className="footer">
          <div className="footer_social">
            <p>Get connected with us on our social networks:</p>
            <ul>
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-x-twitter"></i></li>
              <li><i className="fa-brands fa-google"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
              <li><i className="fa-brands fa-linkedin-in"></i></li>
              <li><i className="fa-brands fa-github"></i></li>
            </ul>
          </div>
          <div className="footer_info">
            <div className="footer_about" id="about">
              <header>ABOUT</header>
              <article>
              "Welcome to our E-commerce Smart Watch Store!  
               Discover the future of wearable technology with our cutting-edge collection of smartwatches.
                Explore a world of stylish, functional, and connected timepieces that seamlessly blend fashion   and innovation.
                From fitness trackers to premium smartwatches, we offer a wide range of options to   suit your lifestyle.
                Stay connected, monitor your health, and elevate your everyday with our   selection of smartwatches. Shop now and redefine the way you experience time!"
              </article>
            </div>
            <div className="footer_products">
              <header>PRODUCTS</header>
              <ul>
                <li><a href="">Apple</a></li>
                <li><a href="">Xiaomi</a></li>
                <li><a href="">FitBit</a></li>
                <li><a href="">Samsung</a></li>
              </ul>
            </div>
            <div className="footer_links">
              <header>USEFUL LINKS</header>
              <ul>
                <li><a href="">Your account</a></li>
                <li><a href="">Recent products</a></li>
                <li><a href="">Shipping rates</a></li>
                <li><a href="">Help</a></li>
              </ul>
            </div>
            <div className="fotter_contact" id="contact">
              <header>CONTACT</header>
              <ul>
                <li><i class="fa-solid fa-house-chimney"></i> Ikeja, Lagos.Nigeria</li>
                <li><i class="fa-solid fa-envelope"></i> flectstores@props.com</li>
                <li><i class="fa-solid fa-phone"></i> +234-81-100-66-100</li>
              </ul>
            </div>
          </div>
          <p  className="copyright">Copyright &copy;2023| bUrNnEr tHe DeV</p>
        </section>
      </>
    );
}
 
export default Footer;