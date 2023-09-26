import Image from "next/image";
import "./home.css";
import "./globals.css";
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
                  <a href="#">Apply Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
