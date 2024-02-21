import React from "react";
import AlbumCard from "./AlbumCard";
import { useGetSongQuery } from "../Features/song.api";

const Albums = () => {
  const { data: album } = useGetSongQuery(undefined);

  return (
    <div className="bg-gradient-to-b overflow-hidden overflow-x-auto from-gray-300 to-blue-400 flex gap-4 flex-wrap justify-center items-center h-screen w-full">
      {album?.map((item: any) => {
        return <AlbumCard key={item.id} album={item.Album} />;
      })}
    </div>
  );
};

export default Albums;
