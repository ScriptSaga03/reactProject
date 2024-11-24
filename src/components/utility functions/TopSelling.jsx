import React, { useEffect, useState } from "react";

export default function NewArrival() {
    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const categories = ["womens-dresses", "tops", "womens-bags"];
    const fetchProducts = async () => {
        try {
            const promises = categories.map((category) =>
                fetch(`https://dummyjson.com/products/category/${category}`).then((resp) => {
                    if (!resp.ok) {
                        throw new Error(`Error fetching category: ${category}`);
                    }
                    return resp.json();
                })
            );

            const results = await Promise.all(promises);
            const combinedProducts = results
                .flatMap((result) => result.products)
                .sort((a, b) => b.rating - a.rating);

            setProducts(combinedProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const visibleProducts = showAll ? products : products.slice(0, 4);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`mx-auto max-w-7xl ${showAll ? "py-24" : "py-16"
                        } sm:py-24 lg:max-w-none lg:py-20`}
                >
                    <h1 className="mb-6 text-3xl md:text-4xl font-extrabold tracking-tight text-center text-gray-800 uppercase">
                        Top Selling
                    </h1>

                    {/* Desktop Cards */}
                    <div className="hidden md:grid md:grid-cols-4 gap-6 rounded-lg">
                        {visibleProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative rounded-lg bg-white shadow-md hover:shadow-lg p-4 transition-transform transform hover:scale-105"
                            >
                                <div className="relative flex justify-center">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-52 object-contain bg-gray-200/30 rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="text-sm font-semibold text-gray-700">
                                        {product.title}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <span
                                                key={index}
                                                className={`${index < product.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                    } text-lg`}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                        <span className="ml-2 text-sm text-gray-500">
                                            {parseFloat(product.rating).toFixed(1)}/5
                                        </span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-800 mt-2">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="block md:hidden relative">
                        <div className="flex overflow-x-scroll no-scrollbar space-x-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-none w-64 bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition duration-300"
                                >
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-40 object-contain bg-gray-200 rounded-t-lg"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-sm font-bold text-gray-800">
                                            {product.title}
                                        </h3>
                                        <div className="flex items-center mt-1">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <span
                                                    key={index}
                                                    className={`${index < product.rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                        } text-lg`}
                                                >
                                                    &#9733;
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-500 text-sm mt-1">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                            onClick={() => {
                                const container = document.querySelector(".overflow-x-scroll");
                                container.scrollBy({ left: -300, behavior: "smooth" });
                            }}
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                            onClick={() => {
                                const container = document.querySelector(".overflow-x-scroll");
                                container.scrollBy({ left: 300, behavior: "smooth" });
                            }}
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Show/Hide Button */}
                    <div className="text-center mt-8">
                        <button
                            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "View All"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
