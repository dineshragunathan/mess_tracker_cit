import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from './Arrow.jsx';
import './Vote.css'
export default function Vote() {

    const settings = {
        dots: false, 
        infinite: true, 
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return(
        <>
          <div className = "MAIN">
              <div className = "carousel">
              <Slider {...settings}>
              {foodData.map((d) => (
                  <div className = "singleCard">
                  <div className = "top ">
                      <img className = "imageHolder" src = {d.img}/>
                  </div>
                  <div className = "bottom">
                      <p>{d.name}</p>
                      <button onclick = "">Choose</button>
                  </div>
                  </div>
              ))}
              </Slider>
              </div>
          </div>
        </>
    )
                
}

const foodData = [
    {
      name: "Sambar Rice",
      img: "./src/assets/Images/VEG/sambar_rice.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh",
      id: '1'
    },
    {
      name: "Curd Rice",
      img: "./src/assets/Images/VEG/curd_rice.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    },
    {
      name: "Veg Fried Rice",
      img: "./src/assets/Images/VEG/veg_rice.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    },
  
    {
      name: "Veg Noodles",
      img: "./src/assets/Images/VEG/veg_noodles.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    },
    {
      name: "Poori and Masala",
      img: "./src/assets/Images/VEG/poori.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    },
    {
      name: "Dosa and Chutney",
      img: "./src/assets/Images/VEG/dosa.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    },
    {
      name: "Idly and Chutney",
      img: "./src/assets/Images/VEG/idly.jpg",
      desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
    }
  
  ]
