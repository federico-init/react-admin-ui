// component
import Single from "../../components/single/Single";

// data
import { singleProduct } from "../../data";

// style
import "./product.scss";

const Product = () => {
  // Fetch data and send to Single component

  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
