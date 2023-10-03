import Courses from "../components/Course";
import Footer from "../components/footer";
import Header2 from "../components/header2";
import "./single-course.css";
import "../courses/courses.css";
import Gallery from "../components/gallery";
export default function About() {
  return (
    <>
      <main>
        <Header2 />

        <section id="sc-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <span>Single Course</span>
                <h2>Music Course</h2>
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
        <section id="sc-features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="/img/hero_contact.png" alt="" />
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
        <section id="courses">
          <div className="container">
            <Courses
              title="Level A "
              subtitle="Beginner"
              description="Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace."
              f1="Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam
              "
              f2="Tote bag trust fund tacos organic four dollar toast kickstarter pork belly
              "
              f3="Authentic vexillologist incididunt adipisicing blog occupy williamsburg
              "
              link="/single-course"
              src="/img/inner_hero_01.png"
              layout="left"
            />
          </div>
        </section>
        <section id="prices">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="price">
                  <span className="subtitle">from</span>
                  <h3>$40</h3>
                  <span className="title">Pay as you go lesson</span>
                  <hr />
                  <p className="description">
                    View available class schedules bylocation, time and day and
                    forsecure online registration.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price border">
                  <span className="subtitle">from</span>
                  <h3>$250</h3>
                  <span className="title">Pay as you go lesson</span>
                  <hr />
                  <p className="description">
                    View available class schedules bylocation, time and day and
                    forsecure online registration.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price">
                  <span className="subtitle">from</span>
                  <h3>$480</h3>
                  <span className="title">Pay as you go lesson</span>
                  <hr />
                  <p className="description">
                    View available class schedules bylocation, time and day and
                    forsecure online registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Gallery />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
