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
  const imageSource = useEffect(() => {
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
    <div className="bg-white h-screen w-full overflow-hidden overflow-x-auto ">
      <div className="flex justify-center items-center text-5xl my-10 text-blue-600 font-bold  ">
        Artists
      </div>
      <div className=" overflow-hidden overflow-x-auto mt-24  flex gap-4 flex-wrap justify-center items-center">
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
