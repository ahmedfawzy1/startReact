import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

export default function Notfound() {
  return (
    <div className={`${style.pagewrap} d-flex flex-row align-items-center`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <Link to={"/"} className="btn btn-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
