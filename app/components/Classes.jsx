import Image from "next/image";
const Classes = ({
  title,
  subtitle,
  description,
  link1,
  link2,
  src,
  price,
  layout,
  phone,
}) => {
  return (
    <div className="row class-box justify-content-between align-items-center">
      {layout === "left" ? (
        <>
          <div className="col-md-6">
            <div className="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <h4>{price}</h4>
              <p>{description}</p>
              <div className="links">
                <a href={link1}>View Schedule</a>
                <a href={link2}>
                  <i className="bi bi-telephone"> </i>
                  &nbsp;{phone}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={src} alt="" className=" img-fluid" />
            {/* <Image src={src} width={615} height={574} alt={title} /> */}
          </div>
        </>
      ) : (
        <>
          <div className="col-md-6">
            <img src={src} alt="" className=" img-fluid" />{" "}
            {/* <Image src={src} width={615} height={574} alt={title} /> */}
          </div>
          <div className="col-md-6">
            <div className="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <h4>{price}</h4>
              <p>{description}</p>
              <div className="links">
                <a href={link1}>View Schedule</a>
                <a href={link2}>
                  <i className="bi bi-telephone"> </i>
                  &nbsp;{phone}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Classes;
