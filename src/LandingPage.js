import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/images/home-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 className="text-5xl font-bold">Welcome to Green Haven</h1>
      <p className="mt-4 text-lg max-w-lg text-center">
        Your one-stop shop for beautiful, air-purifying houseplants. Bring nature into your home today!
      </p>
      <Link
        to="/products"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
