import React, { useState, useEffect } from "react";
import axios from "axios";
import recipe_image from '../assets/recipe-image.jpg'
import { ToastContainer, toast } from "react-toastify";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedBody, setUpdatedBody] = useState("");

  // Fetch data from an API
  useEffect(() => {
    axios
      .get("https://recipe-generator-beryl.vercel.app/api/find/all/content")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Delete Section
  const handleDelete = (id) => {
    axios
      .delete(`https://recipe-generator-beryl.vercel.app/api/delete/content/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setData((prevData) => prevData.filter((item) => item._id !== id));

          if (selectedItem?._id === id) {
            setSelectedItem(null);
          }

          console.log(`Item with id ${id} deleted successfully`);

          toast.success("Item deleted successfully!", {
            autoClose: 500, // Set the time duration
            onClose: () => {
              window.location.reload();
            }
          });
        }

      })
      .catch((error) => {
        console.error(
          "Error deleting data:",
          error.response ? error.response.data.error : error.message
        );
      });
  };

  // Edit Section
  const handleEdit = (item) => {
    setIsEditing(true);
    setSelectedItem(item);
    setUpdatedTitle(item.prompt);
    setUpdatedBody(item.response);
  };

  // Save updates
  const handleSave = () => {
    const updatedData = {
      prompt: updatedTitle,
      response: updatedBody,
    };

    axios
      .put(`https://recipe-generator-beryl.vercel.app/api/update/content/${selectedItem._id}`, updatedData)
      .then((response) => {
        if (response.status === 200) {

          setData((prevData) =>
            prevData.map((item) =>
              item._id === selectedItem._id ? { ...item, ...updatedData } : item
            )
          );
          setIsEditing(false);
          setSelectedItem(null);
          toast.success("Item updated successfully!", {
            autoClose: 500 // Set the time duration
          });
          console.log("Item updated successfully");

        }
      })
      .catch((error) => {
        console.error(
          "Error updating data:",
          error.response ? error.response.data.error : error.message
        );
      });
  };

  return (
    <div className="h-[90vh]">
      <div className="h-[10vh] w-full">   </div>
      <div className="flex flex-col md:flex-row h-[80vh]">

        {/* Sidebar */}

        <div className="w-full h-[80vh] md:w-1/4 bg-gray-800 text-white p-4 overflow-y-auto">
          <h2 className="text-xl  text-center font-bold mb-4">Recipes</h2>
          {data.map((item) => (
            <div
              key={item._id}
              className={`mb-4 p-4 bg-gray-700 rounded-md ${selectedItem?._id === item._id ? "bg-gray-600" : "hover:bg-gray-600"}`}
              onClick={() => setSelectedItem(item)}
            >
              <h3 className="font-semibold">{item.prompt}</h3>
              <p className="text-sm text-gray-300">
                {item.response.substring(0, 40)}...
              </p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="flex-auto  md:flex-1 bg-gray-100 p-6 overflow-y-auto">
          {isEditing ? (
            <div className="bg-white shadow-lg rounded-md p-6">
              <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Body</label>
                <textarea
                  value={updatedBody}
                  onChange={(e) => setUpdatedBody(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          ) : selectedItem ? (
            <div className="bg-white shadow-lg rounded-md p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedItem.prompt}</h2>
              <p>{selectedItem.response}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[80vh]">
              <img src={recipe_image} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
