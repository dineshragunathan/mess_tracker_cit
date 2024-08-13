import React from "react";
import img1 from "../assets/Images/VEG/poori.jpg";
import img2 from "../assets/Images/VEG/curd_rice.jpg";
import img3 from "../assets/Images/VEG/veg_noodles.jpg";
import img4 from "../assets/Images/VEG/dosa.jpg";
import img5 from "../assets/Images/VEG/idly.jpg";
import img6 from "../assets/Images/VEG/sambar_rice.jpg";
import banner from "../assets/1.png";
import "./Menu.css";
export default function Menu() {
  return (
    <>
      <img src={banner} className="banner" alt="..." />
      <h1 style={{ paddingTop: 10, marginLeft: 20 }}>North Indian</h1>
      <div className="flexy" style={{ marginLeft: 10 }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src = {img1} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Poori and Masala</h5>
                <p className="card-text">
                Deep-fried, puffy bread made from wheat flour, served with a spiced potato curry.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curd Rice</h5>
                <p className="card-text">
                Cooked rice mixed with yogurt with mustard seeds, curry leaves, and garnished with pomegranate or cucumber.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Veg Noodles</h5>
                <p className="card-text">
                Stir-fried noodles mixed with assorted vegetables, seasoned with soy sauce and spices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ paddingTop: 10, marginLeft: 20 }}>South Indian</h1>
      <div className="flexy" style={{ marginLeft: 10 }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={img4} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dosa and Chutney</h5>
                <p className="card-text">
                Thin, crispy pancake made from fermented rice and lentil batter, served with coconut or tomato chutney.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img5} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Idly and Chutney</h5>
                <p className="card-text">
                Soft, steamed rice cakes served with coconut or tomato chutney.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img6} className="card-img-top icons" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sambar Rice</h5>
                <p className="card-text">
                A combination of rice and lentil-based vegetable stew, flavored with tamarind, spices, and curry leaves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
