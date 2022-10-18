import { useEffect, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { getTime } from "../Utilities/dateTime";
import { updateTodaysData, getTodaysWord } from "../Utilities/storage";
import allowedGuesses from "../allowedGuesses";

const KeyboardComp = (props) => {
  const {
    input,
    setInput,
    started,
    setStarted,
    finished,
    setFinished,
    curRow,
    setCurRow,
    setShowResults,
    setErrorMessage,
  } = props;

  const [submittedKeys, setSubmittedKeys] = useState({
    green: "",
    yellow: "",
    gray: "",
  });

  useEffect(() => {
    updateKeyboard();
  }, [curRow]);

  function updateKeyboard() {
    const answer = getTodaysWord();
    const charArr = Array.from(new Set([...input.flat()]));

    const green = input
      .map((row) => {
        return row.filter((char, i) => {
          return char === answer[i];
        });
      })
      .flat()
      .join(" ");
    const yellow = charArr
      .filter((char) => answer.includes(char) && !green.includes(char))
      .join(" ");
    const gray = charArr.filter((char) => !answer.includes(char)).join(" ");

    setSubmittedKeys({ green, yellow, gray });
  }

  function findCol() {
    return input[curRow].indexOf("");
  }

  return (
    <Keyboard
      // onChange={(input) => console.log("onChange function: ", { input })} // return whole input string

      onKeyPress={(key) => {
        // IF GAME HAS NOT STARTED: ADD START TIME & SAVE TO LOCAL STORAGE
        if (!started) {
          // Start timer only if key is not backspace or enter
          if (key !== "{bksp}" && key !== "{enter}") {
            const started = getTime();

            updateTodaysData({ started });
            setStarted(started);
          }
        }

        if (!finished && curRow < 6) {
          const curIndx = findCol();
          const newInput = [...input];

          if (key === "{bksp}") {
            // HANDLE BACKSPACE

            // If at the first char do nothing
            if (curIndx === 0) return;

            const indexToDelete = curIndx > 0 ? curIndx - 1 : 4;
            newInput[curRow][indexToDelete] = "";
          } else if (key === "{enter}") {
            // HANDLE ENTER

            // If not at the end of the row do nothing
            if (curIndx !== -1) return;

            const answer = getTodaysWord();
            const guess = input[curRow].join("");

            // CHECK IF GUESS IS A REAL WORD
            if (!allowedGuesses.includes(guess.toLowerCase())) {
              setErrorMessage(
                `${guess[0] + guess.slice(1).toLowerCase()} is not in word list`
              );
              return setTimeout(function () {
                setErrorMessage("");
              }, 1500);
            }

            console.log(`You guessed ${guess} and the answer is ${answer}`); // DELETE

            if (guess === answer) {
              // Guess is correct
              const finished = getTime();
              updateTodaysData({ finished });
              setFinished(finished);

              setTimeout(function () {
                setShowResults(true);
              }, 100);
            } else if (curRow === 5) {
              // No guesses left
              setTimeout(function () {
                setShowResults(true);
              }, 100);
            }

            const nextRow = curRow + 1;
            updateTodaysData({ curRow: nextRow });
            setCurRow(nextRow);
          } else {
            // Any other key, add to input
            newInput[curRow][curIndx] = key.toUpperCase();
          }

          updateTodaysData({ input: newInput });
          setInput(newInput);
        }
      }}
      layout={{
        default: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{enter} Z X C V B N M {bksp}",
        ],
      }}
      buttonTheme={[
        {
          class: "btn-green",
          buttons: submittedKeys.green,
        },
        {
          class: "btn-yellow",
          buttons: submittedKeys.yellow,
        },
        {
          class: "btn-gray",
          buttons: submittedKeys.gray,
        },
      ]}
    />
  );
};

export default KeyboardComp;
