import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerHead text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="location text-uppercase mb-5">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="around text-uppercase mb-5">
                <h3>AROUND THE WEB</h3>
                <div className="social">
                  <i className="fa-brands fa-facebook mx-1"></i>
                  <i className="fa-brands fa-twitter mx-1"></i>
                  <i className="fa-brands fa-linkedin mx-1"></i>
                  <i className="fa-solid fa-globe mx-1"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about text-uppercase mb-4">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBody py-4 text-white text-center">
        Copyright © Your Website 2024
      </div>
    </footer>
  );
}
