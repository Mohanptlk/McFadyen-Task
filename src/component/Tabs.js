import React, { useState } from 'react';
const tabItems = [
  {
    id: 1,
    title: 'details',
    content:
      'One, the Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.See the EDITOR’S NOTE Learn about the DESIGNER',
  },
  {
    id: 2,
    title: 'delivery',
    content:
      'Two, The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.See the EDITOR’S NOTE Learn about the DESIGNER',
  },
  {
    id: 3,
    title: 'Fit',
    content:
      'Three, The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.See the EDITOR’S NOTE Learn about the DESIGNER',
  },
  {
    id: 4,
    title: 'share',
    content:
      'Four, The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.See the EDITOR’S NOTE Learn about the DESIGNER',
  },
];
const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <section className='tab-section'>
      <div className='tab-section-btn'>
        {tabItems.map(({ id, title }) => (
          <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
            id={id}
          />
        ))}
      </div>
      <div className='tab-content'>
        {tabItems.map(({ id, content }) => {
          return (
            <React.Fragment key='id'>
              {active === 0 && id === 1 ? content : active === id ? content : ''}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <>
      <button
        className={isActive ? 'tab-btn active' : 'tab-btn'}
        onClick={onItemClicked}
      >
        {title}
      </button>
    </>
  );
};

export default Tabs;
