import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseurl } from "../axios/Baseurl";
import Artists from "./Artists";

interface TableRowProps {
  Title: string;
  Artist: string;
  Album: string;
  Genre: string;
  id: number;
  onEditClick?: () => void; // Optional prop for handling edit click
}

const TableContaints = ({
  Title,
  Artist,
  Album,
  Genre,
  id,
  onEditClick,
}: TableRowProps) => {
  const [formData, setFormData] = useState({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Removesong = () => {
    axios
      .delete(`${baseurl}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error deleting song:", error);
      });
    console.log(id);
  };
  const addsong = () => {
    axios
      .post(`${baseurl}/save`, formData)
      .then((res) => {
        console.log(res.data);
        // You might want to do something after successful submission, e.g., clear form fields
        setFormData({
          Title: "",
          Artist: "",
          Album: "",
          Genre: "",
        });
      })
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  };

  // Only run once when component mounts

  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="pr-64 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Title}
      </th>
      <td className="px-6 py-4 text-xl">{Artist}</td>
      <td className="px-6 py-4 text-xl">{Album}</td>
      <td className="px-6 py-4 text-xl">${Genre}</td>
      <td className="px-6 py-4 text-right text-xl">
        <a
          href="#"
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={onEditClick}
        >
          Edit
        </a>
        <button
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={Removesong}
        >
          Delete
        </button>
        {/* <div className="flex justify-center items-center">
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="Artist"
          value={formData.Artist}
          onChange={handleChange}
          placeholder="Artist"
        />
        <input
          type="text"
          name="Album"
          value={formData.Album}
          onChange={handleChange}
          placeholder="Album"
        />
        <input
          type="text"
          name="Genre"
          value={formData.Genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <button type="button" onClick={addsong}>
          Submit
        </button>
      </div> */}
      </td>
    </tr>
  );
};

export default TableContaints;
