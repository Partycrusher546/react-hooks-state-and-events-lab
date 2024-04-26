
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';

test("displays only items that match the selected category", () => {
  const testData = [
    { name: "Apple", category: "Produce" },
    { name: "Bread", category: "Bakery" },
    { name: "Milk", category: "Dairy" }
  ];

  render(<ShoppingList items={testData} />);

  
  expect(screen.getAllByRole("listitem")).toHaveLength(testData.length);

  
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Produce" } });
  
  
  return screen.findAllByRole("listitem").then(displayedItems => {
    expect(displayedItems).toHaveLength(1); 
  });
});
