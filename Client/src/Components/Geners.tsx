import React, { useEffect, useState } from "react";
import Showcard from "./Showcard";
import GenerCard from "./GenerCard";
import { useGetSongQuery } from "../Features/song.api";
interface generSongCounts {
  [key: string]: number;
}
const Geners = () => {
  const { data: songs } = useGetSongQuery(undefined);
  const [generSongCounts, setgenerSongCounts] = useState<generSongCounts>({});

  useEffect(() => {
    const countSongsByArtist = () => {
      const counts: generSongCounts = {};

      if (songs) {
        songs.forEach((song: any) => {
          const Genre = song.Genre;
          counts[Genre] = counts[Genre] ? counts[Genre] + 1 : 1;
        });
      }
      return counts;
    };

    setgenerSongCounts(countSongsByArtist());
  }, [songs]);

  // Filter out duplicate artists
  const uniqueArtists = Object.keys(generSongCounts);

  return (
    <div className="bg-white h-screen w-full shadow-xl  ">
      <div className="flex justify-center items-center text-5xl my-10 text-blue-600 font-bold ">
        Genre
      </div>
      <div className="overflow-hidden overflow-x-auto mt-24 flex gap-4 flex-wrap justify-center items-center">
        {uniqueArtists?.map((Genre: any) => {
          return (
            <GenerCard
              key={Genre}
              gener={Genre}
              counts={generSongCounts[Genre]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Geners;
