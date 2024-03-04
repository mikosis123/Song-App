import React from "react";
import axios from "axios";
import TableContaints from "./TableContaints";
import { useState, useEffect } from "react";
import { useGetSongQuery, useCreateSongMutation } from "../Features/song.api";
import {
  useUploadImagerMutation,
  useUploadSongMutation,
} from "../Features/upload.api";
import { FaImages } from "react-icons/fa";
interface Song {
  Title: string;
  Artist: string;
  Album: string;
  Genre: string;
  Imagefile: string;
  audioUrl: string;
}

const Songs = () => {
  const [songadd, setsongadd] = useState(false);
  const [formData, setFormData] = useState<Song>({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
    Imagefile: "",
    audioUrl: "",
  });

  const { data: songs } = useGetSongQuery(undefined);
  const [createSong, { isLoading }] = useCreateSongMutation();
  const [uploadSong, { isLoading: uploadLoading }] = useUploadSongMutation();
  const [uploadImager, { isLoading: imageLoading }] = useUploadImagerMutation();

  const handleAddSong = () => {
    setsongadd(false);
  };
  console.log(formData);
  const addsong = async () => {
    try {
      await createSong(formData);
      setsongadd(!songadd);
      setFormData({
        Title: "",
        Artist: "",
        Album: "",
        Genre: "",
        Imagefile: "",
        audioUrl: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "audioUrl" && files && files.length > 0) {
      const audioFile = files[0];
      // console.log(audioFile);
      try {
        console.log(audioFile);
        // setAudioUrl({ audioUrl: audioFile });
        // console.log(audioUrl);
        const formAudio = new FormData();
        formAudio.append("audioUrl", audioFile);
        const Response = await uploadSong(formAudio);
        // isLoading = { uploadLoading }

        if ("data" in Response) {
          console.log("fulfilled", Response.data.audioResponse);
          setFormData((prevFormData) => ({
            ...prevFormData,
            audioUrl: Response.data.audioResponse,
          }));
        } else {
          console.error("Error response:", Response.error);
        }
      } catch (error) {
        console.error(error);
      }
    } else if (name === "Imagefile" && files && files.length > 0) {
      const imageFile = files[0];
      try {
        // console.log(imageFile);
        // setAudioUrl({ audioUrl: audioFile });
        // console.log(audioUrl);
        const formImage = new FormData();
        formImage.append("image", imageFile);
        const ResponseImage = await uploadImager(formImage);
        // isLoading = { uploadLoading }
        console.log(ResponseImage);
        if ("data" in ResponseImage) {
          console.log("fulfilled", ResponseImage.data.imageResponse);
          setFormData((prevFormData) => ({
            ...prevFormData,
            Imagefile: ResponseImage.data.imageResponse,
          }));
        } else {
          console.error("Error response:", Response.error);
        }
      } catch (error) {}
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const songAdder = () => {
    setsongadd(!songadd);
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="bg-blue-500 h-[300px] w-full flex justify-center items-center ">
        <h1 className="text-6xl text-white font-extrabold ml-5">
          List of Songs
        </h1>
        <button
          onClick={songAdder}
          className=" mt-auto ml-auto text-white hover:text-gray-200 border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-md px-7 py-3 text-center me-4 mb-4   "
        >
          Add Song
        </button>
      </div>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th></th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th></th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Artists
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  album
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Genre
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 w-full">
            {songadd && (
              <tr className="max-w-full">
                <th className="px-6 py-4">
                  <FaImages />
                </th>
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
                <th>
                  <label
                    htmlFor="file"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer"
                  >
                    image
                  </label>
                  <input
                    type="file"
                    name="Imagefile"
                    id="file"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className=" m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer"
                  >
                    audio
                  </label>
                  <input
                    type="file"
                    name="audioUrl"
                    id="file-upload"
                    accept=".mp3, .wav"
                    onChange={handleChange}
                    className="hidden"
                  />
                </th>
                <th>
                  <button
                    className={`text-white ${
                      uploadLoading
                        ? "bg-gray-500 hover:bg-gray-700"
                        : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
                    }  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                    type="button"
                    onClick={addsong}
                    disabled={uploadLoading}
                  >
                    {uploadLoading ? "Uploading..." : "submit song"}
                  </button>
                </th>
              </tr>
            )}
          </tbody>
          <tbody className="">
            {songs?.map((item: any) => (
              <TableContaints
                key={item._id}
                id={item._id}
                Title={item.Title}
                Artist={item.Artist}
                Album={item.Album}
                Genre={item.Genre}
                Imagefile={item?.Imagefile}
                audioUrl={item?.audioUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Songs;
