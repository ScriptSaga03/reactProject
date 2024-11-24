import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { openModal } from "../state management/Reducer";

export default function NewArrival() {

  const dispatch =useDispatch()
  // const isOpen = useSelector((state) => state.modal.isOpen);
  useEffect(() => {
    fetchProducts();
  }, []);


  const categories = ["mens-shirts", "mens-shoes", "womens-dresses"];
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchProducts = async () => {
    try {
      const promises = categories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}`).then(
          (resp) => resp.json()
        )
      );

      const results = await Promise.all(promises); // Fetch all categories simultaneously
      const combinedProducts = results.flatMap((result) => result.products); // Combine all products
      console.log('New Arrivals :',combinedProducts)
      setProducts(combinedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const visibleProducts = showAll ? products : products.slice(0, 4);


  // Modal opening
  

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-4xl ${showAll ? "py-24" : "py-16"
            } sm:py-24 lg:max-w-none lg:py-20 relative`}
        >
          <h1 className="mb-4 md:mt-2 font-heading text-3xl md:text-4xl sm:text-3xl font-extrabold uppercase leading-tight tracking-tight text-black text-center">
            New Arrivals
          </h1>

          <div className="mt-6 p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2 grid-cols-1  lg:gap-6 md:gap-4  sm:gap-2 rounded-lg ">
            {visibleProducts.map((product) => (
              // card 
              <div
              onClick={()=>dispatch(openModal(product))}
                key={product.id}
                className="group relative rounded-md  mb-3 p-2 cursor-pointer  hover:scale-105 transition ease-linear duration-200 hover:shadow-lg hover:opacity-65"
              >
                {/* image div */}
                <div className="relative flex justify-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full md:h-52 h-40 object-contain bg-gray-200/30 backdrop-blur-lg  rounded-t-lg"
                    loading="lazy"
                  />

                </div>
                {/* Card Details */}
                <div className="p-2">
                  {/* brand Name */}
                  <p className="text-md font-semibold font-heading text-buttonBlackHover dark:text-white">
                    {product.title}
                  </p>

                  {/* Rating Stars Section */}
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={index}
                          className={`${index < product.rating ? "text-yellow-300" : "text-gray-400"
                            } text-xl`}
                        >
                          &#9733;
                        </span>
                      ))}
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      {parseFloat(product.rating).toFixed(1)}/5
                      </span>
                  </div>
                  {/* Price */}
                  <p className="text-md font-semibold font-heading text-gray-dark dark:text-white">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show / Show Less Button */}
          < div className="relative -mt-8" >
            <button
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black hover:bg-buttonBlackHover  rounded-lg group border-2 border-gray-dark bg-white hover:text-white dark:text-white "
              onClick={() => setShowAll(!showAll)}
            >
              <span className="relative sm:px-8 px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {showAll ? "Show Less" : "View All"}

              </span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
