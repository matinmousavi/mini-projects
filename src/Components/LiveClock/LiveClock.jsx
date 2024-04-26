import { useEffect, useState } from "react";
function LiveClock() {
  const [clock, setClock] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });
  useEffect(function () {
    setInterval(() => {
      let newClock = { ...clock, time: new Date().toLocaleTimeString() };
      setClock(newClock);
    }, 1000);
  });
  function printHelp() {
    console.log("help");
  }
  useEffect(function () {
    printHelp();
  }, []);

  return (
    <>
      <div>
        {clock.date}
        <br />
        {clock.time}
      </div>
    </>
  );
  // return (
  //   <>
  //     {/* {!!0 || !!0 || !!0} */}
  //     {/* {isFalse && "mahdi khorshidi"} */}
  //   </>
  // );
}

export default LiveClock;
