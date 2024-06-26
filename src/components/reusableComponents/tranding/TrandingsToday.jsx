import { Link } from "react-router-dom";
import MediaCard from "../mediaCard/MediaCard";

const TrandingsToday = ({ fetchedData, maximumResult, mediaType }) => {
  return (
    <>
      <div className=" w-[100%] lg:w-[80%] md:w-[65%] ">
        <div className="w-full block font-bold text-center text-3xl mb-4">
          <span className="border-b-[3px] px-3 pb-1 hover:border-blue-600 border-transparent transition duration-150 ease-in-out cursor-default ">
            {(mediaType ==='tvshow'? 'Shows': 'Movies') || "Media"} Trending Today
          </span>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-wrap ">
              {fetchedData?.results &&
                fetchedData.results
                  .slice(0, maximumResult || 18)
                  .map((result) => (
                    <div
                      key={result.id}
                      className="lg:w-1/3 sm:w-1/2 w-1/2 md:p-2 p-1"
                      id={`section-${result.id}`}
                    >
                      <MediaCard result={result} mediaType={mediaType} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrandingsToday;
