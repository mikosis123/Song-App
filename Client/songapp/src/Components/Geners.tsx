import React from "react";
import Showcard from "./Showcard";
import GenerCard from "./GenerCard";
import { useGetSongQuery } from "../Features/song.api";

const Geners = () => {
  const { data: gener } = useGetSongQuery(undefined);

  return (
    <div className="bg-gradient-to-b h-screen w-full overflow-hidden overflow-x-auto from-gray-300 to-blue-400 ">
      <div>
        <h1 className=" flex justify-center items-center text-3xl mt-24">
          Geners
        </h1>
      </div>
      <div className="flex gap-4 flex-wrap justify-center items-center mt-32  w-full">
        {gener?.map((item: any) => {
          return <GenerCard key={item.id} gener={item.Genre} />;
        })}
      </div>
    </div>
  );
};

export default Geners;
