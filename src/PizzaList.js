import React from 'react';

export default function PizzaList({ pizzas }) {
  return <div className='pizzas'>
    {
      pizzas.map((pizza, i) => <div className='pizza' key={pizza.topping + i}>
        <p>{pizza.topping} pizza</p>
        <p>With {pizza.sauce}</p>
        <p>{pizza.crust} Type of Crust</p>
      </div>)
    }
  </div>;
}

