
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
const ProductCard = ({product}) => {
  

  return (
    <div>
      
      <div className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <Link to={`/products/${product.id}`} className="relative" >
            <span className="absolute top-4 left-3 px-2 bg-orange-500 bg-opacity-90 text-white rounded">{product.best_seller && "best seller"}</span>
            <img
          className="p-2 rounded-t-lg my-3"
          src={product.poster}
          alt="product1"
        />
        </Link>
        

        <div className="px-5 pb-5" >

          <Link to={`/products/${product.id}`}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {product.overview}
            </p>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center my-2">
            <Ratings rating={product.rating}/>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <Link
              to={`/products/${product.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
