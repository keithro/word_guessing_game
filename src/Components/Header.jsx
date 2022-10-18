import { BiBarChartAlt2, BiCog, BiMenu, BiQuestionMark } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Header = ({ setShowResults }) => {
  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <header className="sticky border-b flex justify-between p-2">
      <div className="flex-1 justify-start flex">
        <div className="flex justify-center items-center sm:ml-1 md:ml-2">
          <BiMenu className="text-3xl cursor-pointer" />
        </div>
      </div>
      <h1 className="h-10 text-center font-bold text-4xl">
        Wordle, My Turtle!
      </h1>
      <div className="flex-1 justify-end flex">
        <div className="flex justify-center items-center sm:mr-1 md:mr-2">
          {/* <BiQuestionMark className="text-3xl border-2 rounded-full border-black" /> */}
          <AiOutlineQuestionCircle className="text-3xl cursor-pointer" />
        </div>
        <div className="flex justify-center items-center sm:mr-1 md:mr-2">
          <BiBarChartAlt2
            className="text-3xl cursor-pointer"
            onClick={handleShowResults}
          />
        </div>
        <div className="flex justify-center items-center sm:mr-1 md:mr-2">
          <BiCog className="text-3xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
