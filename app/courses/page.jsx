import Image from "next/image";
import Footer from "../components/footer";
import Header2 from "../components/header2";
import "./courses.css";
import Courses from "../components/Course";
export default function About() {
  return (
    <>
      <Header2 />
      <main>
        <section id="courses-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <span>Courses </span>
                <h2>
                  Choose a program <br /> that suits you
                </h2>
              </div>
              <div className="col-md-4">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
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
              link="/contact"
              src="/img/inner_hero_01.png"
              layout="right"
            />
            <Courses
              title="Level B"
              subtitle="Intermediate"
              description="Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace."
              f1="Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam
              "
              f2="Tote bag trust fund tacos organic four dollar toast kickstarter pork belly
              "
              f3="Authentic vexillologist incididunt adipisicing blog occupy williamsburg
              "
              link="/contact"
              src="/img/inner_hero_01.png"
              layout="left"
            />
            <Courses
              title="Level C "
              subtitle="Advanced"
              description="Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace."
              f1="Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam
              "
              f2="Tote bag trust fund tacos organic four dollar toast kickstarter pork belly
              "
              f3="Authentic vexillologist incididunt adipisicing blog occupy williamsburg
              "
              link="/contact"
              src="/img/inner_hero_01.png"
              layout="right"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
