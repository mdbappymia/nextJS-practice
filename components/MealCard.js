/* eslint-disable @next/next/no-img-element */
import React from "react";

const MealCard = ({ meal }) => {
  const { strMealThumb, strMeal, strInstructions } = meal;
  return (
    <div className="col-lg-4 my-3">
      <div className="card">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0, 200)}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
