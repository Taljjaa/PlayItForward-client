import React, { useState } from "react";
import NonprofitGraph from "./NonprofitGraph";

type DisplayOption = "metrics" | "events" | "volunteers";

const NonprofitGraphDisplay = () => {
  const [displayOption, setDisplayOption] = useState<DisplayOption>("metrics");

  return (
    <div className="flex flex-1 border-t border-blue-900">
      <div className="flex flex-col h-full">
        <button
          onClick={() => setDisplayOption("metrics")}
          type="button"
          className="flex-1 shadow hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900 border-t-0"
        >
          Metrics
        </button>
        <button
          onClick={() => setDisplayOption("events")}
          type="button"
          className="flex-1 shadow hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900 border-t-0 border-b-0"
        >
          Events
        </button>
        <button
          onClick={() => setDisplayOption("volunteers")}
          type="button"
          className="flex-1 shadow hover:bg-blue-600 focus:outline-none text-white font-bold p-10 border-solid border border-blue-900"
        >
          Volunteers
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <NonprofitGraph displayOption={displayOption} />
      </div>
    </div>
  );
};

export default NonprofitGraphDisplay;
