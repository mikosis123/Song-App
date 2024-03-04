import { useGetSongQuery } from "../Features/song.api";
import defaultImage from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg"; // Import a default image in case no image is available
import { useEffect, useState } from "react";

type artistcard = {
  artist: string;
  songCount: number;
};

const ArtistCard = ({ artist, songCount }: artistcard) => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const { data: songs } = useGetSongQuery(undefined);

  useEffect(() => {
    const fetchImageSource = async () => {
      if (songs) {
        const artistSongs = songs.filter((song: any) => song.Artist === artist);
        if (artistSongs.length > 0) {
          // Assuming each song object contains an 'imageURL' property
          setImageSource(artistSongs[0].Imagefile);
        }
      }
    };

    fetchImageSource();
  }, [artist, songs]);
  return (
    <div className="shadow-xl">
      <div className="w-full max-w-sm bg-[#e5e5e5] shadow-lg border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={imageSource || defaultImage}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Artists :{" "}
              <span className="text-3xl font-bold text-blue-600">{artist}</span>
            </h5>
          </a>

          <div className="flex items-center justify-end">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              <span>{songCount}</span> songs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
