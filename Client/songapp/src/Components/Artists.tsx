import React, { useEffect, useState } from "react";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import ArtistCard from "./ArtistCard";
import { useGetSongQuery } from "../Features/song.api";

interface ArtistSongCounts {
  [key: string]: number;
}

const Artists = () => {
  const { data: songs } = useGetSongQuery(undefined);
  const [artistSongCounts, setArtistSongCounts] = useState<ArtistSongCounts>(
    {}
  );

  useEffect(() => {
    const countSongsByArtist = () => {
      const counts: ArtistSongCounts = {};

      if (songs) {
        songs.forEach((song: any) => {
          const artist = song.Artist;
          counts[artist] = counts[artist] ? counts[artist] + 1 : 1;
        });
      }
      return counts;
    };

    setArtistSongCounts(countSongsByArtist());
  }, [songs]);

  // Filter out duplicate artists
  const uniqueArtists = Object.keys(artistSongCounts);

  return (
    <div>
      <div className="flex justify-center items-center text-5xl my-10">
        Artists
      </div>
      <div className="bg-gradient-to-b overflow-hidden overflow-x-auto from-gray-300 to-blue-400 flex gap-4 flex-wrap justify-center items-center h-screen w-full">
        {uniqueArtists.map((artist) => (
          <ArtistCard
            key={artist}
            artist={artist}
            songCount={artistSongCounts[artist] || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;
