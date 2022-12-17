import { Link, Switch } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
        <Link to="/products/course">An Online Course</Link>
        <li></li>
      </ul>
    </section>
  );
};

export default Products;
