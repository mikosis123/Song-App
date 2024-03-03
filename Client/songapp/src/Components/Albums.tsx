import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { useGetSongQuery } from "../Features/song.api";

interface AlnumSongCounts {
  [key: string]: number;
}

const Albums = () => {
  const { data: songs } = useGetSongQuery(undefined);
  const [albumSongCounts, setalbumSongCounts] = useState<AlnumSongCounts>({});

  useEffect(() => {
    const countSongsByArtist = () => {
      const counts: AlnumSongCounts = {};

      if (songs) {
        songs.forEach((song: any) => {
          const Album = song.Album;
          counts[Album] = counts[Album] ? counts[Album] + 1 : 1;
        });
      }
      return counts;
    };

    setalbumSongCounts(countSongsByArtist());
  }, [songs]);

  // Filter out duplicate artists
  const uniqueArtists = Object.keys(albumSongCounts);

  return (
    <div className="bg-gradient-to-b  overflow-y-auto from-gray-300 to-blue-400 flex gap-4 flex-wrap justify-center items-center h-screen w-full">
      {uniqueArtists?.map((Album: any) => {
        return (
          <AlbumCard
            key={Album}
            album={Album}
            counts={albumSongCounts[Album]}
          />
        );
      })}
    </div>
  );
};

export default Albums;
