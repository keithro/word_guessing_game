import { calcTimeElapsed } from "../Utilities/dateTime";
import { BiX } from "react-icons/bi";
import { BsShare } from "react-icons/bs";

const Results = ({ started, finished, setShowResults }) => {
  const timeToFinish = calcTimeElapsed(started, finished);
  const hours = timeToFinish.slice(timeToFinish[0] === "0" ? 1 : 2, 2);
  const mins = timeToFinish.slice(timeToFinish[3] === "3" ? 4 : 3);

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center">
      <div className="fixed w-screen h-screen bg-white opacity-50"></div>
      <div className="bg-white bg-opacity-100 w-full max-w-lg sm:rounded-xl p-5 text-center flex flex-col items-center drop-shadow-2xl">
        {/* TODO: Make modal separate component and this can be the content for results+modal */}
        <div className="relative w-full">
          <h1 className="text-center font-bold text-3xl mt-4 mb-2">Results</h1>
          {finished && (
            <p className="font-light">{`You finished in ${hours} hours and ${mins} minutes.`}</p>
          )}
          <h2 className="text-center uppercase font-bold text-lg mt-4 mb-2">
            Statistics
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col w-20">
              <div className="text-4xl">0</div>
              <div className="text-xs font-light flex flex-wrap justify-center">
                Played
              </div>
            </div>
            <div className="flex flex-col w-20">
              <div className="text-4xl">0</div>
              <div className="text-xs font-light flex flex-wrap justify-center">
                Win %
              </div>
            </div>
            <div className="flex flex-col w-20">
              <div className="text-4xl">0</div>
              <div className="text-xs font-light flex flex-wrap justify-center">
                Current Streak
              </div>
            </div>
            <div className="flex flex-col w-20">
              <div className="text-4xl">0</div>
              <div className="text-xs font-light flex flex-wrap justify-center">
                Max Streak
              </div>
            </div>
          </div>
          <h2 className="text-center uppercase font-bold text-lg mt-4 mb-2">
            Guess Distribution
          </h2>
          <div className="border w-full font-bold text-sm p-5">
            Look at this BEAUTIFUL graph!
            <div className="flex mb-1">
              <div className="w-5 ">1</div>
              <div className="w-full ">
                <div className="bg-gray-500 text-white w-1/12 flex justify-end px-3">
                  {0}
                </div>
              </div>
            </div>
            <div className="flex mb-1">
              <div className="w-5 ">2</div>
              <div className="w-full ">
                <div className="bg-gray-500 text-white w-1/12 flex justify-end px-3">
                  {0}
                </div>
              </div>
            </div>
            <div className="flex mb-1">
              <div className="w-5 ">3</div>
              <div className="w-full ">
                <div className="bg-gray-500 text-white w-1/12 flex justify-end px-3">
                  {0}
                </div>
              </div>
            </div>
            <div className="flex mb-1">
              <div className="w-5 ">4</div>
              <div className="w-full ">
                <div className="bg-gray-500 text-white w-3/12 flex justify-end px-3">
                  {1}
                </div>
              </div>
            </div>
            <div className="flex mb-1">
              <div className="w-5 ">3</div>
              <div className="w-full ">
                <div className="bg-green-500 text-white w-full flex justify-end px-3">
                  {4}
                </div>
              </div>
            </div>
          </div>

          {finished && (
            <>
              <h2 className="text-center uppercase font-bold text-lg mt-4 mb-2">
                Next Wordle
              </h2>
              <div>In one whole day, you silly goose!</div>
              <button className="bg-green-500 text-white px-14 py-2.5 rounded-full mt-4 hover:bg-green-600">
                Share
                <BsShare className="inline-block ml-4" />
              </button>
            </>
          )}
          <div className="absolute top-0 right-0" onClick={handleCloseResults}>
            <BiX className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
