function getDateStr() {
  const currentDate = new Date();
  // console.log({
  //   toISOString: currentDate.toISOString(),
  //   toLocaleString: currentDate.toLocaleString(),
  // });
  return currentDate.toISOString().slice(0, 10);
}

function getTime() {
  const time = new Date();
  // console.log({ time, toTimeString: time.toTimeString() }); // DELETE
  return time;
}

function calcTimeElapsed(started, finished) {
  const startTime = new Date(started);
  const endTime = new Date(finished);
  const elapsedTime = Math.round((endTime - startTime) / 1000);
  const elapsedTimeString = new Date(elapsedTime * 1000)
    .toISOString()
    .substring(11, 16);
  return elapsedTimeString;
}

export { getDateStr, getTime, calcTimeElapsed };
