import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      className={`${style.contact} d-flex justify-content-center align-items-center text-center`}
    >
      <div className="container">
        <div className="title pt-4">
          <h2 className="text-uppercase text-dark mb-3 fs-1 fw-bolder">
            CONATCT SECTION
          </h2>
          <div className="lines d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-dark"></div>
            <i className="fa-solid fa-star text-dark"></i>
            <div className="line ms-3 bg-dark"></div>
          </div>
        </div>
        <form className="w-50 p-3 mx-auto mt-5">
          <input
            type="text"
            name="userName"
            className="userName form-control border-0 border-bottom mb-5 shadow-none"
            placeholder="userName"
          />
          <input
            type="number"
            name="userAge"
            className="userAge form-control border-0 border-bottom mb-5 shadow-none"
            placeholder="userAge"
          />
          <input
            type="email"
            name="userEmail"
            className="userEmail form-control border-0 border-bottom mb-5 shadow-none"
            placeholder="userEmail"
          />
          <input
            type="password"
            name="userPassword"
            className="userPassword form-control border-0 border-bottom mb-5 shadow-none"
            placeholder="userPassword"
          />
          <button className="btn text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
}
