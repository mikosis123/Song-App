import { count } from "console";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import { useEffect, useState } from "react";
import { useGetSongQuery } from "../Features/song.api";

type artistcard = {
  album: string;
  counts: number;
};

const AlbumCard = ({ album, counts }: artistcard) => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const { data: songs } = useGetSongQuery(undefined);

  useEffect(() => {
    const fetchImageSource = async () => {
      if (songs) {
        const artistSongs = songs.filter((song: any) => song.Album === album);
        if (artistSongs.length > 0) {
          // Assuming each song object contains an 'imageURL' property
          setImageSource(artistSongs[0].Imagefile);
        }
      }
    };

    fetchImageSource();
  }, [album, songs]);
  return (
    <div className="shadow-xl">
      <div className="w-full max-w-sm bg-[#e5e5e5] shadow-lg border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-lg "
            src={imageSource || image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <span className="text-3xl font-bold text-blue-600"> {album}</span>{" "}
              album
            </h5>
          </a>
        </div>
        <div className="flex items-center justify-end px-5 pb-5">
          <span className="text-xl font-bold flex flex-end text-gray-500 dark:text-white">
            {counts} songs
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
