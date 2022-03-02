import axios from "axios";
import Router from "next/router";
import Layout from "../components/Layout";
import MealCard from "../components/MealCard";

const shop = ({ data }) => {
  return (
    <Layout title="This is shop page">
      <div className="container">
        <input
          className="form-control"
          placeholder="Search by food name"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            Router.push(`/shop?searchMeal=${e.target.value}`);
          }}
          name=""
          id=""
        />
        <div className="row">
          {data.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
shop.getInitialProps = async ({ query }) => {
  console.log(query);
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${
      query.searchMeal || "b"
    }`
  );
  const data = res.data;
  return { data: data.meals || [] };
};
export default shop;
