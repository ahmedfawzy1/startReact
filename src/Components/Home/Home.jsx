import style from "./Home.module.css";
import logo from "../../Assets/images/avataaars.svg";

export default function Home() {
  return (
    <section
      className={`${style.home} d-flex justify-content-center align-items-center text-white text-center`}
    >
      <div className="container">
        <div className="image">
          <img className="mb-3 logo" src={logo} width={250} alt="avataaars" />
        </div>
        <div className="title pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            START FRAMEWORK
          </h2>
          <div className="lines d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
