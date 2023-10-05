import Image from "next/image";
import Header2 from "../components/header2";
import "./about.css";
import Footer from "../components/footer";
export default function About() {
  return (
    <>
      <Header2 />
      <main>
        <section id="about-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <span>ABOUT US</span>
                <h2>
                  A few reasons for
                  <br /> choosing us
                </h2>
              </div>
              <div className="col-md-4">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="about-features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="content">
                  <span>A CHOICE OF PROGRAMS FOR EVERY LEVEL AND NEED</span>
                  <h3>Our main features</h3>
                  <p>
                    Elevate your vector art in the advanced digital Illustration
                    course at Tabula. Instructor-led creative classes at your
                    pace. Elevate your vector art in the advanced digital
                    Illustration course at Tabula. Instructor-led creative
                    classes at your pace grow the holistic world view of
                    disruptive.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>
                      Tote bag trust fund tacos organic four dollar toast
                      kickstarter pork belly
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>
                      Tote bag trust fund tacos organic four dollar toast
                      kickstarter pork belly
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>
                      Tote bag trust fund tacos organic four dollar toast
                      kickstarter pork belly
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>
                      Tote bag trust fund tacos organic four dollar toast
                      kickstarter pork belly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-review">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="st-review">
                  <div className="image">
                    <img src="/img/testmonials.png" alt="" />
                  </div>
                  <p className="review">
                    „Tabula music school is a MUST for anyone interested in
                    bettering their music skills.”
                  </p>
                  <h6>Name</h6>
                </div>

                <img
                  className="loose-circle"
                  src="/img/green-symbol-outline.png"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="about-teachers">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading w-100">
                  <h3>Our Talented Teachers</h3>
                  <a href="#">Apply Now</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="teams">
                  <div className="team">
                    <div className="img-box">
                      <img
                        src="https://www.ramenpaul.com/_next/image?url=%2Fabout-img.jpg&w=640&q=75"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <span className="sheading">Music</span>
                      <h4 className="mheading">Ramen Paul</h4>
                      <p className="description">
                        Nanotechnology immersion along the information.
                      </p>
                      <div className="social-links">
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team">
                    <div className="img-box">
                      <img
                        src="https://www.ramenpaul.com/_next/image?url=%2Fabout-img.jpg&w=640&q=75"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <span className="sheading">Music</span>
                      <h4 className="mheading">Ramen Paul</h4>
                      <p className="description">
                        Nanotechnology immersion along the information.
                      </p>
                      <div className="social-links">
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team">
                    <div className="img-box">
                      <img
                        src="https://www.ramenpaul.com/_next/image?url=%2Fabout-img.jpg&w=640&q=75"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <span className="sheading">Music</span>
                      <h4 className="mheading">Ramen Paul</h4>
                      <p className="description">
                        Nanotechnology immersion along the information.
                      </p>
                      <div className="social-links">
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team">
                    <div className="img-box">
                      <img
                        src="https://www.ramenpaul.com/_next/image?url=%2Fabout-img.jpg&w=640&q=75"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text">
                      <span className="sheading">Music</span>
                      <h4 className="mheading">Ramen Paul</h4>
                      <p className="description">
                        Nanotechnology immersion along the information.
                      </p>
                      <div className="social-links">
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
