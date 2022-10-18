import { getTodaysWord } from "../Utilities/storage";
import Letter from "./Letter";

const Row = ({ input, i, inputWord, wordIndex, curRow, submitted }) => {
  const answer = submitted ? getTodaysWord() : "";

  return (
    <div className="flex gap-2">
      {inputWord.map((char, j) => {
        const itemKey = `${i}-${j}`;
        let classList =
          "basis-1/5 aspect-square text-2xl md:text-4xl font-bold border border-solid rounded flex justify-center items-center";

        if (submitted) {
          if (char === answer[j]) {
            classList += " bg-green-500";
          } else if (answer.includes(char)) {
            classList += " bg-yellow-400";
          } else {
            classList += " bg-gray-500";
          }
          classList += " text-white";
        }
        return <Letter key={itemKey} classList={classList} char={char} />;
      })}
    </div>
  );
};

export default Row;
