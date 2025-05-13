
import { useParams} from "react-router-dom";
import React ,{ useEffect } from "react"; 
import { Products } from "../products";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetail = () => {

    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  const { id } = useParams();
  const product = Products.find(prod => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
<div className="flex flex-col w-full min-h-screen max-w-4xl justify-center items-center mx-auto bg-white rounded shadow p-6 mt-10">

    <img src={product.img} alt={product.title}   style={{ width: '800px', height: '320px', marginTop:'20px' }}
  className="object-contain mb-4"/>

<div className="w-full max-w-3xl flex flex-col gap-y-3 justify-center items-center mx-auto  p-6 mt-10">
      <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-lg font-semibold text-gray-800">{product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <div className="flex gap-10"> 
        <button className="flex gap-2 rounded p-2 bg-green-500 hover:bg-green-300 hover:scale-110 transform duration-500">
  <FaShoppingCart />
  add to cart
        </button>
        <button className="rounded p-2 bg-yellow-500 hover:bg-amber-300 hover:scale-110 transform duration-500">
          <Link to={'/'}>back to products</Link>
        </button>
      </div>
    </div>
    </div>
  
  );
};

export default ProductDetail;