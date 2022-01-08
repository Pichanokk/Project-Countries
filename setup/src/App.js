import React, { useState } from 'react';
import Country from './Country';
import Categories from './Categories';
import items from './data';

const allCategories =['all',...new Set(items.map((item)=> item.category))];
console.log(allCategories);

function App() {
  const [countryItems, setCountryItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
     setCountryItems(items);
     return;  
    }
    const newItems = items.filter((item)=> item.category === category);
    setCountryItems(newItems);
  };

  return (
    <main>
      <section className='country section'>
        <div className='title'>
          <h2>Countries</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Country items={countryItems} />
      </section>
    </main> 
  );
}

export default App;
