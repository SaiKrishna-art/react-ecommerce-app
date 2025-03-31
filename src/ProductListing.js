import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice"; // Import Redux action

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 25.99,
    image: "/images/monstera.jpg",
    category: "Tropical",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 19.99,
    image: "/images/snakeplant.jpg",
    category: "Low Maintenance",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 34.99,
    image: "/images/fiddleleaf.jpg",
    category: "Tropical",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 22.99,
    image: "/images/peacelily.jpg",
    category: "Flowering",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 14.99,
    image: "/images/aloe.jpg",
    category: "Low Maintenance",
  },
  {
    id: 6,
    name: "Orchid",
    price: 29.99,
    image: "/images/orchid.jpg",
    category: "Flowering",
  },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // Get cart state

  const groupedPlants = plants.reduce((acc, plant) => {
    acc[plant.category] = [...(acc[plant.category] || []), plant];
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Houseplants</h1>

      {Object.keys(groupedPlants).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-3 gap-6">
            {groupedPlants[category].map((plant) => (
              <div key={plant.id} className="border rounded-lg p-4 shadow-md text-center">
                <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                <p className="text-lg text-green-600">${plant.price.toFixed(2)}</p>
                <button
                  className={`mt-3 px-4 py-2 rounded text-white font-semibold transition ${
                    cart.some((item) => item.id === plant.id) ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                  }`}
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={cart.some((item) => item.id === plant.id)}
                >
                  {cart.some((item) => item.id === plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
