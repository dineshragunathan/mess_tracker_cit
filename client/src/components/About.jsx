import React from 'react'
import Slider from 'react-slick';
import './about.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dinesh from '../assets/Images/dinesh.jpeg';
import bharath from '../assets/Images/bharath.jpeg';
import thrish from '../assets/Images/thrisyant.jpeg';
import akash from '../assets/Images/akash.jpeg';
import './About.css'
export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="MAIN">
      <div className='carousel'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='singleCard'>
              <div className='top'>
                <img src={d.img} alt='' className='imageHolder' />
              </div>

              <div className='bottom'>
                <h1 className='bottom'>{d.name}</h1>
                <p className='bottom-text'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
const data = [{
  name: 'Dinesh R',
  img: dinesh,
  review: 'I priortize doing leet code even when I am on gym 😊',
  id: '101'
}, {
  name: 'Bharath S',
  img: bharath,
  review: 'A frontend developer',
  id: '102'
}, {
  name: 'Thrisyanth A',
  img: thrish,
  review: 'I like trains',
  id: '103'
}, {
  name: 'Akash B',
  img: akash,
  review: 'Ejamaan',
  id: '104'
}]