import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter the food items based on the category
  const filteredFoodList = food_list.filter(item => category === "All" || category === item.category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.length === 0 ? (
          <p className='no-products-message'>No products</p>
        ) : (
          filteredFoodList.map((item, index) => (
            <FoodItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              description={item.description} 
              price={item.price} 
              image={item.image} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
