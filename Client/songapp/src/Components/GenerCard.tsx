import image from "../Components/pexels-elviss-railijs-bitāns-1389429.jpg";

type artistcard = {
  gener: string;
};

const GenerCard = ({ gener }: artistcard) => {
  return (
    <div>
      <div className="w-full max-w-sm bg-blue-300 shadow-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              name of the Artists is : {gener}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              total number of songs
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              total number of songs
            </span>
            <span>25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerCard;
