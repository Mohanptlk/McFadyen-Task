import React, { useState } from 'react';

const ProductDetails = () => {
  const btnItem = [
    {
      id: 0,
      text: 'XS',
    },
    {
      id: 1,
      text: 'S',
    },
    {
      id: 2,
      text: 'M',
    },
    {
      id: 3,
      text: 'L',
    },
    {
      id: 4,
      text: 'XXL',
    },
  ];
  const [active, setActive] = useState('');
  const clickAction = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <section className='product-detail'>
      <h1>JONATHAN SIMKHAI</h1>
      <p>Lurex Linen Viscose Jacket in Conchiglia</p>
      <strong>$225</strong>
      <p>Color Conchiglia</p>
      <div className='size-section'>
        <h4>
          <strong>SIZE L</strong> <strong>SIZE GUIDE</strong>
        </h4>
        <div className='size-btns'>
          {btnItem.map((item, idx) => {
            return (
              <button
                key={idx}
                type='button'
                onClick={(e) => {
                  setActive(item.id);
                  clickAction(e);
                }}
                className={`btn ${active === item.id && 'active'}`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
        <div className='detail-text'>
          <button type='button' className='btn'>
            add to bag
          </button>
          <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
          <p>Speak to a Personal Stylist CHAT NOW</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
