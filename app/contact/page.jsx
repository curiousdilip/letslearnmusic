import Image from "next/image";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Header2 from "../components/header2";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <Header2 />
      <main>
        <section id="contact-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <span>ABOUT US</span>
                <h2>Get in touch today!</h2>
                <p>
                  Normcore proident sed selvage. Post-ironic ugh master cleanse
                  etsy you probably haven't heard of them mustache mollit
                  readymade.
                </p>
              </div>
              <div className="col-md-4">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact-details">
          <div className="container">
            <div className="row ">
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text">
                    <h4>Find us</h4>
                    <p>PO BOX Collins Street West Victoria, Australia</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-alarm"></i>
                  </div>
                  <div className="text">
                    <h4>Find us</h4>
                    <p>
                      Mon-Fri: 8 AM - 5 PM
                      <br />
                      Sut-Sun: 8 AM - 2 PM
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="text">
                    <h4>Call us</h4>
                    <p>
                      +234 456 7890
                      <br />
                      +2342 5446 67
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-md-3">
                <div className="box">
                  <div className="icon">
                    <i className="bi bi-pencil-square"></i>
                  </div>
                  <div className="text">
                    <h4>Write to us</h4>
                    <p>
                      Office@tabula.com
                      <br />
                      Courses@tabula.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <iframe
                  style={{ width: "100%", border: "0" }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Ramen+school+of+music(now+online+classes),+Kali+Nagar,+Bengali+Colony,+Mahavir+Enclave+Part+1,+Mahavir+Enclave,+New+Delhi,+Delhi,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-form">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="img-box">
                  <img
                    src="/img/inner_hero_03.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form">
                  <h4>Find Classes</h4>
                  <form action="#" method="">
                    <div className="row mb-4 pb-2">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                          />
                          <span className="icon bi bi-person-circle"></span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <span className="icon bi bi-envelope "></span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-4 pb-2">
                      <select className="form-control">
                        <option selected>Select your instruments</option>
                        <option value="violin">Violin</option>
                        <option value="piano">Piano</option>
                        <option value="drums">Drums</option>
                      </select>
                      <span className="icon bi bi-music-note-beamed "></span>
                    </div>

                    <div className="form-group mb-4 pb-2">
                      <textarea
                        rows="5"
                        cols="10"
                        id="msg"
                        name="msg"
                        placeholder="Message"
                        className="w-100"
                      ></textarea>
                      <span className="icon-textarea bi bi-send  "></span>
                    </div>

                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Gallery />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
