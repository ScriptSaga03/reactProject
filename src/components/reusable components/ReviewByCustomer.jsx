import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export default function ReviewByCustomer() {
  const [reviews, setReviews] = useState([]);
  const categories = ["womens-dresses", "tops", "womens-bags", "mens-shirts"];

  const containerRef = useRef(null);

  const fetchReviews = async () => {
    try {
      // Fetch all categories in parallel
      const results = await Promise.all(
        categories.map((category) =>
          fetch(`https://dummyjson.com/products/category/${category}`)
            .then((resp) => {
              if (!resp.ok) {
                throw new Error(`Error fetching category: ${category}`);
              }
              return resp.json();
            })
        )
      );

      // Process and flatten reviews
      const allReviews = results.flatMap((res) =>
        res.products.flatMap((product) =>
          product.reviews.map((review) => ({
            ...review,
            image: product.thumbnail,
            productName: product.title,
          }))
        )
      );
      const shuffleReviews=allReviews.sort(()=>Math.random()-0.5)
      console.log(shuffleReviews)
      setReviews(shuffleReviews);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="w-full bg-white py-12 mb-5">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex sm:items-center items-end justify-between mb-8">
          <div className="flex-1">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold uppercase leading-tight tracking-wide text-black">
              Our Happy Customers
            </h1>
          </div>
          <div className="flex gap-2 ms-1">

            {/* Left Button */}
            <button
              className="text-black bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:shadow-lg hover:bg-gray-100 transition active:scale-90"
              onClick={() =>
                containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
              }
            >
              <FaArrowLeft />
            </button>

            {/* Right Button  */}
            <button
              className="text-black bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:shadow-lg hover:bg-gray-100 transition"
              onClick={() =>
                containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
              }
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Review Cards Section */}
        <div className="flex overflow-x-scroll no-scrollbar p-2" ref={containerRef}>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white md:min-w-[400px] min-w-[250px] mx-2 rounded-lg shadow-md hover:shadow-xl flex justify-between items-center hover:shadow-gray-500 p-6 transition transform hover:-translate-y-2"
              >

                <div>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`${i < review.rating ? "text-yellow-400" : "text-gray-300"
                          } text-xl`}
                      >
                        &#9733;
                      </span>
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">
                      {review.rating ? review.rating.toFixed(1) : "No Rating"}
                    </span>
                  </div>
                  {/* Reviewer Name */}
                  <p className="text-sm text-gray-600 font-semibold mb-1 inline-flex items-center gap-2">
                    {review.reviewerName || "Anonymous"}<MdVerified className="text-green-600"/>
                  </p>
                  {/* Comment */}
                  <p className="text-sm text-gray-700">
                    {review.comment || "No Comments"}
                  </p>
                  {/* Product Name */}
                  <h2 className="text-md font-bold mb-2 text-gray-800">
                    {review.productName}
                  </h2>
                </div>
                <div>
                  <img
                    src={review.image || "default-image.jpg"}
                    alt={review.productName}
                    className="w-40 h-40 object-cover rounded-md mb-4"
                  />
                </div>

              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No Reviews Available
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
