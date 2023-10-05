import Image from "next/image";
const Courses = ({
  title,
  subtitle,
  description,
  link,
  src,
  price,
  layout,
  phone,
  f1,
  f2,
  f3,
}) => {
  return (
    <div className="row course-box justify-content-between align-items-center">
      {layout === "left" ? (
        <>
          <div className="col-md-6">
            <div className="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <p>{description}</p>

              <ul className="features">
                <li>
                  <i className="bi bi-mortarboard"> {f1}</i>
                </li>
                <li>
                  <i className="bi bi-calendar-range">{f2}</i>
                </li>
                <li>
                  <i className="bi bi-bookmarks">{f3}</i>
                </li>
              </ul>
              <a href={link}>Apply Today</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={src} alt="" className="img-fluid" />
            {/* <Image src={src} width={615} height={574} alt={title} /> */}
          </div>
        </>
      ) : (
        <>
          <div className="col-md-6">
            <img src={src} alt="" className="img-fluid" />{" "}
            {/* <Image src={src} width={615} height={574} alt={title} /> */}
          </div>
          <div className="col-md-6">
            <div className="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <p>{description}</p>

              <ul className="features">
                <li>
                  <i className="bi bi-mortarboard"> {f1}</i>
                </li>
                <li>
                  <i className="bi bi-calendar-range">{f2}</i>
                </li>
                <li>
                  <i className="bi bi-bookmarks">{f3}</i>
                </li>
              </ul>
              <a href={link}>Apply Today</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Courses;
