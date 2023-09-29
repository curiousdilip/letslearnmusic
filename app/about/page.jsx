import Image from "next/image";
import Header2 from "../components/header2";
import "./about.css";
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
                <img src="/img/hero_contact.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
