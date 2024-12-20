import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [question, setQuestion] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  // const navigate = useNavigate();
  
  const [question, setQuestion] = useState('');
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldSubmit(true); // Trigger the useEffect
  };

  useEffect(() => {
    const submitData = async () => {
      if (!shouldSubmit) return; // Only run if shouldSubmit is true

      try {
        //need to be change while on live server Api
        const response = await axios.post("https://recipe-generator-beryl.vercel.app/api/create/content", {
          question,
        });

        if (response.status === 201) {
          toast.success("Data added successfully!");
          setQuestion("");
          setShowSidebar(true);
          navigate("/");
          window.location.reload();
        } else {
          toast.error("Failed to add data. Please try again.");
        }
      } catch (error) {
        console.error("Error adding data:", error.message);
        toast.error("An error occurred. Please try again.");
      } finally {
        setShouldSubmit(false); // Reset the state
      }
    };

    submitData();
  }, [shouldSubmit, question, navigate]); // Dependencies

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3002/api/create/content", {
  //       question,
  //     });

  //     if (response.status === 201) {
  //       toast.success("Data added successfully!");
  //       setQuestion("");
  //       setShowSidebar(true);

  //       navigate("/");
  //     } else {
  //       toast.error("Failed to add data. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error adding data:", error.message);
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };

  return (
    <nav className="bg-gray-900 text-white w-screen h-[10vh] fixed top-0">
      <ToastContainer />
      <div className=" lg:px-8">
        <div className="flex items-center justify-start h-24">

          <div className="hidden md:flex items-center">
            <Link to="/home" className="text-xl font-bold">
              <img className="w-20" src={logo} alt="" />
            </Link>
          </div>

          {/* Form*/}
          <div className="m-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row md:flex-row justify-center items-center  p-6 md:space-y-0 md:space-x-4"
            >
              <input
                type="text"
                name="question"
                value={question}
                onChange={handleChange}
                placeholder="Enter Ingredients..."
                className="w-60 md:w-80 px-4 py-3 rounded-md bg-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600"
              >
                <FaSearch />
              </button>
            </form>
          </div>


          {/* Menu */}
          <div className="hidden lg:flex space-x-4 ">

            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link to="/About" className="hover:text-gray-300">
              About
            </Link>
          </div>

          {/* Hamburger Menu for Mobile/Tablet */}
          <div className=" ml-auto lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-700">
          <div className="space-y-1 px-4 pt-4 pb-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link
              to="/About"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
