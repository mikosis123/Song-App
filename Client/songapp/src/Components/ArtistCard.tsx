import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

type artistcard = {
  artist: string;
  songCount: any;
};

const ArtistCard = ({ artist, songCount }: artistcard) => {
  return (
    <div className="shadow-xl">
      <div className="w-full max-w-sm bg-[#e5e5e5] shadow-lg border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="product image" />
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
