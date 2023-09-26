import "./footer.css";
export default function About() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h2>Let's Learn Music</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                doloremque sequi sapiente fugiat ut quaerat omnis{" "}
              </p>
            </div>
            <div class="col-md-3">
              <h3>Contact Us</h3>
              <div class="links">
                <a href="#">
                  <i class="bi bi-geo-alt">Dwarka, New Delhi, India</i>
                </a>
                <a href="#">
                  <i class="bi bi-telephone">+91 9899742615</i>
                </a>
                <a href="#">
                  <i class="bi bi-alarm">Monday - Friday: 8 AM - 5PM</i>
                </a>
              </div>

              <div class="social-links">
                <a href="#">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <h3>Quick Links</h3>
              <div class="page-link">
                <a href="/">Home</a>
                <a href="#">Courses</a>
                <a href="#">Schedule</a>
              </div>
            </div>
            <div class="col-md-3">
              <h3>About</h3>
              <div class="page-link">
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
