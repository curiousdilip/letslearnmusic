import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Let's Learn Music</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                doloremque sequi sapiente fugiat ut quaerat omnis{" "}
              </p>
            </div>
            <div className="col-md-3">
              <h3>Contact Us</h3>
              <div className="links">
                <a href="#">
                  <i className="bi bi-geo-alt">Dwarka, New Delhi, India</i>
                </a>
                <a href="#">
                  <i className="bi bi-telephone">+91 9899742615</i>
                </a>
                <a href="#">
                  <i className="bi bi-alarm">Monday - Friday: 8 AM - 5PM</i>
                </a>
              </div>

              <div className="social-links">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Quick Links</h3>
              <div className="page-link">
                <a href="/">Home</a>
                <a href="#">Courses</a>
                <a href="#">Schedule</a>
              </div>
            </div>
            <div className="col-md-3">
              <h3>About</h3>
              <div className="page-link">
                <a href="#">About Us</a>
                <a href="#">Events</a>
                <a href="#">Get Quote</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
