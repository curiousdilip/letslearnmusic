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
          <div class="col-md-6">
            <div class="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <h4>{price}</h4>
              <p>{description}</p>
              <div class="links">
                <a href={link1}>View Schedule</a>
                <a href={link2}>
                  <i class="bi bi-telephone"> </i>
                  &nbsp;{phone}
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src={src} alt="" />
          </div>
        </>
      ) : (
        <>
          <div class="col-md-6">
            <img src={src} alt="" />
          </div>
          <div class="col-md-5 offset-1">
            <div class="content">
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <h4>{price}</h4>
              <p>{description}</p>
              <div class="links">
                <a href={link1}>View Schedule</a>
                <a href={link2}>
                  <i class="bi bi-telephone"> </i>
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
