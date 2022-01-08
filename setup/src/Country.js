import React from 'react';

const Country = ({items}) => {

  return <div className='section-center'>
    {items.map((countryItem)=>{
      const {id,title,img,desc,time} = countryItem;
      return <article key={id} className='country-item'>
        <img src={img} alt={title} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='time'>UTC {time} HRS</h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>

      </article>
    })}
  </div>;
};

export default Country;
