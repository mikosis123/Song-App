import React from "react";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import ArtistCard from "./ArtistCard";
import { useGetSongQuery } from "../Features/song.api";

const Artists = () => {
  const { data: artist } = useGetSongQuery(undefined);
  console.log(artist);
  return (
    <div className="bg-gradient-to-b overflow-hidden overflow-x-auto from-gray-300 to-blue-400 flex gap-4 flex-wrap justify-center items-center h-screen w-full">
      {artist?.map((item: any) => {
        return <ArtistCard key={item.id} artist={item.Artist} />;
      })}
    </div>
  );
};

export default Artists;
