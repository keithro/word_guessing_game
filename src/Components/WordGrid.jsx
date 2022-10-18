import Row from "./Row";

const WordGrid = ({ input, curRow }) => {
  return (
    <div className="w-72 md:w-96 mx-auto p-2 flex flex-col gap-2 border-solid">
      {input.map((inputWord, i) => {
        const submitted = i < curRow;

        return (
          <Row key={i} i={i} inputWord={inputWord} submitted={submitted} />
        );
      })}
    </div>
  );
};

export default WordGrid;
