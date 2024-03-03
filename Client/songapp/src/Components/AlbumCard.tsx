import { count } from "console";
import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

type artistcard = {
  album: string;
  counts: number;
};

const AlbumCard = ({ album, counts }: artistcard) => {
  return (
    <div>
      <div className="w-full max-w-sm bg-blue-300 shadow-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              name of the album is : {album}
            </h5>
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            total number of songs
          </span>
          <span>{counts}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
