import Image from "next/image";
import Header2 from "../components/header2";

export default function About() {
  return (
    <>
      <Header2 />
      <main>
        <section id="about-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>This is About Page</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
