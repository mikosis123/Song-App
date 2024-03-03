import React, { useState, useEffect } from "react";

import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

import { FaPauseCircle, FaPlay, FaPlayCircle } from "react-icons/fa";
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
  Imagefile: string;
  audioUrl: string;

  onEditClick?: () => void; // Optional prop for handling edit click
}

const TableContaints = ({
  Title,
  Artist,
  Album,
  Genre,
  id,
  Imagefile,
  audioUrl,
}: TableRowProps) => {
  const [formData, setFormData] = useState({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
    Imagefile: "",
    audioUrl: "",
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updateSongMutation] = useUpdateSongMutation();
  const [play, setPlay] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null); // Reference to audio element

  const handleTogglePlay = () => {
    setPlay(!play); // Toggle play state
  };
  const handlePlay = () => {
    setIsPlaying(true); // Set isPlaying to true to play audio
  };

  const handlePause = () => {
    setIsPlaying(false); // Set isPlaying to false to pause audio
  };

  React.useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (play) {
        audioElement.play(); // If play is true, play the audio
      } else {
        audioElement.pause(); // If play is false, pause the audio
      }
    }
  }, [play]); // Run this effect whenever play state changes
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
      // Extract only the fields that can be updated
      const { Title, Artist, Album, Genre } = formData;

      // Perform the update with only the allowed fields
      await updateSongMutation({
        id,
        data: { Title, Artist, Album, Genre },
      });

      console.log("Song updated successfully");
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  // Only run once when component mounts

  return (
    <tr className=" bg-[#e5e5e5] border-b hover:bg-white dark:bg-gray-800 dark:border-gray-700">
      <th>
        <img className="h-20 w-20" src={Imagefile || image} alt="" />
      </th>

      <th
        scope="row"
        className=" flex  justify-center gap-8 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Title}
        {isEditing && (
          <input
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
      </th>

      <th
        className="cursor-pointer"
        onClick={() => {
          setPlay(!play);
          setIsPlaying(!isPlaying);
        }}
      >
        {play ? (
          <FaPlayCircle className="text-3xl" />
        ) : (
          <FaPauseCircle className="text-3xl" />
        )}
        <audio ref={audioRef} src={audioUrl} />
      </th>
      <td className="px-6 py-4 text-xl">
        {Artist}
        {isEditing && (
          <input
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="Artist"
            value={formData.Artist}
            onChange={handleChange}
            placeholder="Artist"
          />
        )}
      </td>
      <td className="px-6 py-4 text-xl">
        {Album}{" "}
        {isEditing && (
          <input
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="Album"
            value={formData.Album}
            onChange={handleChange}
            placeholder="Album"
          />
        )}
      </td>
      <td className="px-6 py-4 text-xl">
        {Genre}
        {isEditing && (
          <input
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[150px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
            placeholder="Genre"
          />
        )}
      </td>
      <td className="px-6 py-4 text-right text-xl">
        {isEditing ? (
          <>
            <button onClick={handleUpdateSong}>Update</button>
            <span
              onClick={() => setIsEditing(!isEditing)}
              className="font-medium px-6  pb-10 text-blue-600 dark:text-blue-500 cursor-pointer"
            >
              x
            </span>
          </>
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
