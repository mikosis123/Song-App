import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseurl } from "../axios/Baseurl";

interface TableRowProps {
  itemName: string;
  color: string;
  category: string;
  price: number;
  onEditClick?: () => void; // Optional prop for handling edit click
}

const TableContaints = ({
  itemName,
  color,
  category,
  price,
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

  const addsong = () => {
    axios
      .post(`${baseurl}/save`, formData)
      .then((res) => {
        console.log(res.data);
        // You might want to do something after successful submission, e.g., clear form fields
        setFormData({
          Title: "",
          artist: "",
          album: "",
          genre: "",
        });
      })
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  };

  useEffect(() => {
    // Fetch data if needed
    // axios.get(`${baseurl}/get`).then((res) => {
    //   console.log(res.data);
    // });
  }, []); // Only run once when component mounts

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="pr-64 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {itemName}
      </th>
      <td className="px-6 py-4 text-xl">{color}</td>
      <td className="px-6 py-4 text-xl">{category}</td>
      <td className="px-6 py-4 text-xl">${price}</td>
      <td className="px-6 py-4 text-right text-xl">
        <a
          href="#"
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={onEditClick}
        >
          Edit
        </a>
        <a
          href="#"
          className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
          onClick={onEditClick}
        >
          Delete
        </a>
        <div>
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            placeholder="Artist"
          />
          <input
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
            placeholder="Album"
          />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <button type="button" onClick={addsong}>
            Submit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableContaints;
