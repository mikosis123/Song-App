import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseurl } from "../axios/Baseurl";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import Artists from "./Artists";
import Play from "./Icons/Play";

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
  const [isEditing, setIsEditing] = useState(false);

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
  const handleUpdateSong = () => {
    axios
      .put(`${baseurl}/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating song:", error);
      });
  };
  // const addsong = () => {
  //   axios
  //     .post(`${baseurl}/save`, formData)
  //     .then((res) => {
  //       console.log(res.data);
  //       // You might want to do something after successful submission, e.g., clear form fields
  //       setFormData({
  //         Title: "",
  //         Artist: "",
  //         Album: "",
  //         Genre: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error adding song:", error);
  //     });
  // };

  // Only run once when component mounts

  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th>
        <img className="h-20 w-20" src={image} alt="" />
      </th>
      <th
        scope="row"
        className="pr-64 flex  justify-center gap-8 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Title}
        {/* <Play /> */}
        {/* <i className=" color:blue fa-solid fa-play"></i> */}
      </th>
      <td className="px-6 py-4 text-xl">{Artist}</td>
      <td className="px-6 py-4 text-xl">{Album}</td>
      <td className="px-6 py-4 text-xl">{Genre}</td>
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
      </td>
    </tr>
  );
};

export default TableContaints;
