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
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="st-review">
                <div class="image">
                  <img src="/img/testmonials.png" alt="" />
                </div>
                <p class="review">
                  „Tabula music school is a MUST for anyone interested in
                  bettering their music skills.”
                </p>
                <h6>Name</h6>
              </div>

              <img
                class="loose-circle"
                src="/img/green-symbol-outline.png"
                alt=""
              />
            </div>
            <div class="col-md-5 offset-1">
              <div class="content">
                <span>About Us</span>
                <h2>Let's Learn Music</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  voluptas architecto nulla debitis illum nostrum officia
                  quibusdam ratione repellendus accusantium. Facilis
                  necessitatibus corporis placeat? Praesentium minima officiis
                  a. Mollitia, dignissimos.
                </p>
                <div class="cta">
                  <a href="/contact">Apply Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="classes">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="class-container">
                <div class="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div class="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div class="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div class="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div class="class">
                  <h3>Piano</h3>
                  <a href="#">Learn More</a>
                </div>
                <div class="class">
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
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6">
              <h2 class="heading">Weekly Schedules</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="sc-box">
                <div class="sc-title">
                  <div class="sub-title">INTERMEDIATE B1</div>
                  <div class="title">Drums</div>
                </div>
                <div class="sc-inner-row today">
                  <div class="week-day">Monday</div>
                  <div class="time">06-08pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Tuesday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Wednesday</div>
                  <div class="time">04-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Thursday</div>
                  <div class="time">05-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Friday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Saturday</div>
                  <div class="time">08-09pm</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sc-box">
                <div class="sc-title">
                  <div class="sub-title">INTERMEDIATE B1</div>
                  <div class="title">Drums</div>
                </div>
                <div class="sc-inner-row today">
                  <div class="week-day">Monday</div>
                  <div class="time">06-08pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Tuesday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Wednesday</div>
                  <div class="time">04-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Thursday</div>
                  <div class="time">05-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Friday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Saturday</div>
                  <div class="time">08-09pm</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sc-box">
                <div class="sc-title">
                  <div class="sub-title">INTERMEDIATE B1</div>
                  <div class="title">Drums</div>
                </div>
                <div class="sc-inner-row today">
                  <div class="week-day">Monday</div>
                  <div class="time">06-08pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Tuesday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Wednesday</div>
                  <div class="time">04-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Thursday</div>
                  <div class="time">05-06pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Friday</div>
                  <div class="time">05-07pm</div>
                </div>
                <div class="sc-inner-row ">
                  <div class="week-day">Saturday</div>
                  <div class="time">08-09pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
