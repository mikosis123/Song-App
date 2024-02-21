import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseurl } from "../axios/Baseurl";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import Artists from "./Artists";
import Play from "./Icons/Play";
import {
  useUpdateSongMutation,
  useDeleteSongMutation,
} from "../Features/song.api";

interface TableRowProps {
  Title: string;
  Artist: string;
  Album: string;
  Genre: string;
  id: string;

  onEditClick?: () => void; // Optional prop for handling edit click
}

const TableContaints = ({ Title, Artist, Album, Genre, id }: TableRowProps) => {
  const [formData, setFormData] = useState({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
  });
  console.log(id);
  const [isEditing, setIsEditing] = useState(false);
  const [updateSongMutation] = useUpdateSongMutation();
  const [deleteSong, { isLoading: isDeleting }] = useDeleteSongMutation();
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [deleteSongMutation] = useDeleteSongMutation();

  const handleDeleteSong = async () => {
    try {
      const response = await deleteSongMutation(id);
      // Handle response if needed
      console.log("Song deleted successfully:", response);
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };
  const handleUpdateSong = async () => {
    try {
      await updateSongMutation({
        id,
        data: formData,
      });
      console.log("Song updated successfully");
      setIsEditing(!isEditing);
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  // Only run once when component mounts

  return (
    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th>
        <img className="h-20 w-20" src={image} alt="" />
      </th>
      {isEditing ? (
        <tbody>
          <th>
            <input
              className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              placeholder="Title"
            />
          </th>
          <th>
            <input
              className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="Artist"
              value={formData.Artist}
              onChange={handleChange}
              placeholder="Artist"
            />
          </th>
          <th>
            <input
              className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="Album"
              value={formData.Album}
              onChange={handleChange}
              placeholder="Album"
            />
          </th>
          <th>
            <input
              className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="Genre"
              value={formData.Genre}
              onChange={handleChange}
              placeholder="Genre"
            />
          </th>
        </tbody>
      ) : (
        <th
          scope="row"
          className="pr-64 flex  justify-center gap-8 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {Title}
          {/* <Play /> */}
          {/* <i className=" color:blue fa-solid fa-play"></i> */}
        </th>
      )}

      <td className="px-6 py-4 text-xl">{Artist}</td>
      <td className="px-6 py-4 text-xl">{Album}</td>
      <td className="px-6 py-4 text-xl">{Genre}</td>
      <td className="px-6 py-4 text-right text-xl">
        {isEditing ? (
          <button onClick={handleUpdateSong}>Update</button>
        ) : (
          <>
            <a
              href="#"
              className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
              onClick={handleEditClick}
            >
              Edit
            </a>
            <button
              className="font-medium px-6 text-blue-600 dark:text-blue-500 hover:underline"
              onClick={handleDeleteSong}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TableContaints;
