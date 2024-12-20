import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Recipe Generator & Manager
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Welcome to the <span className="font-semibold">Recipe Generator & Manager</span> app! This innovative application is designed to make your cooking experience simpler and more creative. With our easy-to-use interface and Gemini AI integration, you can:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
          <li>
            <span className="font-semibold">Discover Recipes: </span>Input the ingredients you have at home, and AI will suggest delicious recipes you can prepare.
          </li>
          <li>
            <span className="font-semibold">Manage Your Ingredients:</span> Add, edit, or delete ingredients based on what's available in your kitchen.
          </li>
          <li>
            <span className="font-semibold">Customize Recipes:</span> Save suggested recipes and modify them to suit your preferences.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          This app leverages advanced AI tools, such as <span className="font-semibold">Google Gemini</span>, to suggest recipes that make sense based on your input. Whether you're trying to make the most of leftover ingredients or explore new culinary adventures, Recipe Generator & Manager has you covered!
        </p>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With a focus on usability and creativity, our app empowers you to:
          </p>
          <ul className="list-disc list-inside text-gray-700 my-4 space-y-2">
            <li>Reduce food waste by utilizing ingredients you already have.</li>
            <li>Discover new recipes and expand your culinary repertoire.</li>
            <li>Save time and effort with easy-to-follow recipe suggestions.</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Ready to start your cooking journey? Explore recipes, manage ingredients, and create delicious meals today!
          </p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
