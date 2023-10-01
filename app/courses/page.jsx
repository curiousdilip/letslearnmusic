import Image from "next/image";
import Footer from "../components/footer";
import Header2 from "../components/header2";
import "./courses.css"
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
                  Choose a program       <br /> that suits you
                </h2>
              </div>
              <div className="col-md-4">
                <img src="/img/hero_contact.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
