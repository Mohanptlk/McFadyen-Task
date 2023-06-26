import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProductOne from '../images/product-one.png';
import ProductTwo from '../images/product-two.png';
import ProductTwoOf from '../images/product-two-1.png';
import ProductThree from '../images/product-three.png';
import ProductFour from '../images/product-four.png';

const Data = [
  {
    id: 1,
    img: ProductOne,
  },
  {
    id: 1,
    img: ProductTwoOf,
    img1: ProductTwo,
  },
  {
    id: 1,
    img: ProductThree,
  },
  {
    id: 1,
    img: ProductFour,
  },
];
const Product = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 12000,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
  };

  return (
    <section className='product-image'>
      <span className='heart-icon'></span>

      {!isMobile ? (
        <>
          {Data.map((image, idx) => {
            return (
              <div key={idx} className='slide-img'>
                <img src={image.img} />
                <img src={image.img1} />
              </div>
            );
          })}
        </>
      ) : (
        <Slider {...settings}>
          {Data.map((image, idx) => {
            return (
              <div key={idx} className='slide-img'>
                <img src={image.img} />
              </div>
            );
          })}
        </Slider>
      )}
    </section>
  );
};

export default Product;
