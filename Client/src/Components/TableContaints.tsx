import React, { useState, useEffect, useRef } from "react";

import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
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
}

const TableContents = ({
  Title,
  Artist,
  Album,
  Genre,
  id,
  Imagefile,
  audioUrl,
}: TableRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    Title: Title,
    Artist: Artist,
    Album: Album,
    Genre: Genre,
    Imagefile: Imagefile,
    audioUrl: audioUrl,
  });

  const [play, setPlay] = useState(false);
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [updateSongMutation] = useUpdateSongMutation();
  const [deleteSongMutation] = useDeleteSongMutation();

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

  const handleDeleteSong = async () => {
    try {
      const response = await deleteSongMutation(id);
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
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  const handlePlay = (audioUrl: string) => {
    setActiveAudio(audioUrl);
    setPlay(true);
  };

  const handlePause = () => {
    setActiveAudio(null);
    setPlay(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [play]);

  return (
    <tr
      className={` ${
        activeAudio === audioUrl && play ? "bg-white" : "bg-[#e5e5e5]"
      } w-full border-t border-gray-300 hover:bg-white `}
    >
      <th>
        <img className="h-20 w-20" src={Imagefile || image} alt="" />
      </th>

      <th
        scope="row"
        className="flex justify-center gap-8 text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Title}
        {isEditing && (
          <input
            className="bg-gray-50 ml-[-70px]  mt-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        onClick={() =>
          activeAudio === audioUrl ? handlePause() : handlePlay(audioUrl)
        }
      >
        {activeAudio === audioUrl && play ? (
          <FaPauseCircle className="text-3xl text-blue-500" />
        ) : (
          <FaPlayCircle className="text-3xl" />
        )}
        <audio ref={audioRef} src={audioUrl} />
      </th>
      <td className="px-6 py-4 text-xl">
        {Artist}
        {isEditing && (
          <input
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
            placeholder="Genre"
          />
        )}
      </td>
      <td className=" py-4 text-right text-xl">
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
export default TableContents;
