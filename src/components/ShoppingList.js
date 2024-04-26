import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange} role="combobox">
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Bakery">Bakery</option>
        <option value="Pantry">Pantry</option>
        <option value="Frozen">Frozen</option>
        <option value="Snacks">Snacks</option>
        <option value="Beverages">Beverages</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Home">Home</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
