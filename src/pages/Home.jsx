import { Link, useLoaderData } from "react-router-dom";
import "./home.css";
import Clock from "../components/Countdown";

const HomePage = () => {
  const { products = [] } = useLoaderData();

  return (
    <div>
      <h1>WORKSHOP</h1>

      <div className="container">
        {products.map((item, index) => (
          <div className="container__product" key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="container__product--name">{item.title}</div>
            <Link to={`/product-card/${item.id}`}>
              <Clock />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  return { products: data };
};
