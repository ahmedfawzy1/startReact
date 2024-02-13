import React, { useState } from "react";
import style from "./Portfolio.module.css";
import port1 from "../../Assets/images/poert1.png";
import port2 from "../../Assets/images/port2.png";
import port3 from "../../Assets/images/port3.png";
import port4 from "../../Assets/images/poert1.png";
import port5 from "../../Assets/images/port2.png";
import port6 from "../../Assets/images/port3.png";

export default function Portfolio() {
  let [selectImage, setSelectImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectImage(image);
  };
  const closeCart = () => {
    setSelectImage(false);
  };

  return (
    <section
      className={`${style.portfolio} d-flex justify-content-center align-items-center text-white mb-4 text-center`}
    >
      <div className="container">
        <div className="title pt-4">
          <h2 className="text-uppercase text-dark mb-3 fs-1 fw-bolder">
            PORTFOLIO COMPONENT
          </h2>
          <div className="lines d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3 bg-dark"></div>
            <i className="fa-solid fa-star text-dark"></i>
            <div className="line ms-3 bg-dark"></div>
          </div>
        </div>
        <div className="contaienr">
          <div className="row g-5">
            {[
              { image: port1, key: 1 },
              { image: port2, key: 2 },
              { image: port3, key: 3 },
              { image: port4, key: 4 },
              { image: port5, key: 5 },
              { image: port6, key: 6 },
            ].map((item) => (
              <div className="col-md-4" key={item.key}>
                <div
                  className={`${style.box} rounded-3 overflow-hidden position-relative`}
                  onClick={() => handleImageClick(item.image)}
                >
                  <img src={item.image} className="w-100" alt="portfolio" />
                  <div
                    className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className="fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectImage && (
          <div
            className="cart position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
            onClick={closeCart}
          >
            <img className={`${style.imgCart}`} src={selectImage} alt="port" />
          </div>
        )}
      </div>
    </section>
  );
}
