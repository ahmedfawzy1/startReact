import style from "./About.module.css";

export default function About() {
  return (
    <section
      className={`${style.about} d-flex justify-content-center align-items-center text-white text-center`}
    >
      <div className="container">
        <div className="title pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            ABOUT COMPONENT
          </h2>
          <div className="lines d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text text-start ps-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text text-start ps-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
