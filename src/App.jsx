import { useState, useEffect } from "react";
import Header from "./Components/Header";
import WordGrid from "./Components/WordGrid";
import KeyboardComp from "./Components/Keyboard";
import Results from "./Components/ResultsModal";
import { getTodaysData } from "./Utilities/storage";
import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";

const App = () => {
  // TODO: ADD TO REDUX
  const [wordIndex, setWordIndex] = useState(0);
  const [input, setInput] = useState([]);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [curRow, setCurRow] = useState(0);
  // const [won, setWon] = useState(false); // DELETE

  // TODO: DON'T NEED REDUX
  const [errorMessage, setErrorMessage] = useState(""); // Do you need this?
  const [showResults, setShowResults] = useState(false);

  // DELETE
  console.log("App states: ", {
    wordIndex,
    input,
    started,
    finished,
    curRow,
  });

  useEffect(() => {
    console.log("*** useEffect function ran ***");
    const data = getTodaysData();
    console.log(data);

    if (data.finished) setShowResults(true);
    setInput(data.input);
    setCurRow(data.curRow);
    setFinished(data.finished);
    setStarted(data.started);
    // setWon(data.won);
  }, []);

  return (
    // <div className="App h-screen p-2 pt-10 bg-gradient-to-b from-fuchsia-900 to-sky-900">
    <div className="App h-screen flex flex-col">
      <Header setShowResults={setShowResults} />
      <main className="flex-auto flex flex-col">
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        <section className="flex-auto flex flex-col justify-center align-middle p-8">
          <WordGrid input={input} wordIndex={wordIndex} curRow={curRow} />
        </section>

        <section className="w-full max-w-xl mx-auto">
          <KeyboardComp
            input={input}
            setInput={setInput}
            started={started}
            setStarted={setStarted}
            finished={finished}
            setFinished={setFinished}
            setShowResults={setShowResults}
            curRow={curRow}
            setCurRow={setCurRow}
            setErrorMessage={setErrorMessage}
          />
        </section>
      </main>
      {/* {won && <Results started={started} finished={finished} won={won} />} */}
      {showResults && (
        <Results
          started={started}
          finished={finished}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
};

export default App;
