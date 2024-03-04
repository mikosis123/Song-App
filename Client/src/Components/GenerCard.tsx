import { useEffect, useState } from "react";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";
import { useGetSongQuery } from "../Features/song.api";

type artistcard = {
  gener: string;

  counts: number;
};

const GenerCard = ({ gener, counts }: artistcard) => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const { data: songs } = useGetSongQuery(undefined);

  useEffect(() => {
    const fetchImageSource = async () => {
      if (songs) {
        const artistSongs = songs.filter((song: any) => song.Genre === gener);
        if (artistSongs.length > 0) {
          // Assuming each song object contains an 'imageURL' property
          setImageSource(artistSongs[0].Imagefile);
        }
      }
    };

    fetchImageSource();
  }, [gener, songs]);
  return (
    <div className="shadow-xl">
      <div className="w-full max-w-sm bg-[#e5e5e5] shadow-xl border border-gray-300 rounded-lg shadow">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={imageSource || image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Gener :
              <span className="text-3xl font-bold text-blue-600"> {gener}</span>
            </h5>
          </a>

          <div className="flex items-center justify-end">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              <span>{counts}</span> songs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerCard;
