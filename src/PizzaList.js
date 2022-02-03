import React from 'react';
import Pizza from './Pizza';

export default function PizzaList({ pizzas }) {
  return (
    <div className="pizzas">
      <Pizza pizzas={pizzas} />
    </div>
  );
}
