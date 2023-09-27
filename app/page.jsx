import Image from "next/image";
import "./home.css";
import "./globals.css";
import HomeSlider from "./components/homeSlider";
import Classes from "./components/Classes";
import classData from "./data/home";
export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h2 className="headline">
                  <span>HAVE YOU BEEN LOOKING FOR</span>
                  Your Kind of
                </h2>
                <h3 className="sub-headline">Music School?</h3>
                <div className="cta">
                  <a href="/contact">Apply Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="types">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <HomeSlider />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
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
            <div className="col-md-5 offset-1">
              <div className="content">
                <span>About Us</span>
                <h2>Let's Learn Music</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  voluptas architecto nulla debitis illum nostrum officia
                  quibusdam ratione repellendus accusantium. Facilis
                  necessitatibus corporis placeat? Praesentium minima officiis
                  a. Mollitia, dignissimos.
                </p>
                <div className="cta">
                  <a href="/contact">Apply Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="classes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="class-container">
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div className="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="single-class">
        <div className="container">
          <Classes
            title="BEGINNERS COURSE"
            subtitle="Oboa Lessons"
            price="$599"
            description="Elevate your vector art in the advanced digital Illustration course at Tabula. Instrucator-led creative classes at your pace."
            link1="/contact"
            link2="/contact"
            phone="+91 9899742615"
            src="/img/inner_hero_02.png"
            layout="left"
          />
          <Classes
            title="BEGINNERS COURSE"
            subtitle="Oboa Lessons"
            price="$599"
            description="Elevate your vector art in the advanced digital Illustration course at Tabula. Instrucator-led creative classes at your pace."
            link1="/contact"
            link2="/contact"
            phone="+91 9899742615"
            src="/img/inner_hero_01.png"
            layout="right"
          />
        </div>
      </section>
      <section id="wk-schedule">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <h2 className="heading">Weekly Schedules</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="sc-box">
                <div className="sc-title">
                  <div className="sub-title">INTERMEDIATE B1</div>
                  <div className="title">Drums</div>
                </div>
                <div className="sc-inner-row today">
                  <div className="week-day">Monday</div>
                  <div className="time">06-08pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Tuesday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Wednesday</div>
                  <div className="time">04-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Thursday</div>
                  <div className="time">05-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Friday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Saturday</div>
                  <div className="time">08-09pm</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-box">
                <div className="sc-title">
                  <div className="sub-title">INTERMEDIATE B1</div>
                  <div className="title">Drums</div>
                </div>
                <div className="sc-inner-row today">
                  <div className="week-day">Monday</div>
                  <div className="time">06-08pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Tuesday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Wednesday</div>
                  <div className="time">04-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Thursday</div>
                  <div className="time">05-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Friday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Saturday</div>
                  <div className="time">08-09pm</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-box">
                <div className="sc-title">
                  <div className="sub-title">INTERMEDIATE B1</div>
                  <div className="title">Drums</div>
                </div>
                <div className="sc-inner-row today">
                  <div className="week-day">Monday</div>
                  <div className="time">06-08pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Tuesday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Wednesday</div>
                  <div className="time">04-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Thursday</div>
                  <div className="time">05-06pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Friday</div>
                  <div className="time">05-07pm</div>
                </div>
                <div className="sc-inner-row ">
                  <div className="week-day">Saturday</div>
                  <div className="time">08-09pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
