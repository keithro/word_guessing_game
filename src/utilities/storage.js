import wordleList from "../wordleList";
import { getDateStr } from "./dateTime";

function saveAllData(data) {
  // console.log("*** SAVE DATA FUNCTION ***"); // DELETE
  localStorage.setItem("wordle", JSON.stringify(data));
}

function saveTodaysData(todaysData) {
  const newData = { ...getAllData() };
  newData[getDateStr] = todaysData;
  saveAllData(newData);
}

function getAllData() {
  const data = JSON.parse(localStorage.getItem("wordle"));
  return data || {};
}

function getTodaysData() {
  // console.log("*** GET TODAY'S DATA FUNCTION ***"); // DELETE

  const data = getAllData();
  const date = getDateStr();

  if (!data[date]) {
    data[getDateStr()] = {
      wordIndex: Math.floor(Math.random() * wordleList.length),
      won: false,
      curRow: 0,
      started: null,
      finished: null,
      input: Array(6)
        .fill()
        .map(() => Array(5).fill("")),
    };
    saveAllData(data);
  }

  // console.log("Today's data: ", data[date]); // DELETE
  return data[date];
}

function updateTodaysData(newData) {
  // console.log("*** UPDATE DATA FUNCTION ***"); // DELETE

  const data = getAllData();
  const date = getDateStr();

  // console.log("Original data: ", data); // DELETE
  // console.log("+ new data: ", newData); // DELETE

  data[date] = {
    ...data[date],
    ...newData,
  };
  // console.log("Updated data: ", data); // DELETE
  saveAllData(data);
}

function getTodaysWord(dateStr) {
  const todaysData = getTodaysData();
  const todaysWord = wordleList[todaysData.wordIndex].toUpperCase();
  return todaysWord;
}

export { saveTodaysData, getTodaysData, updateTodaysData, getTodaysWord };
