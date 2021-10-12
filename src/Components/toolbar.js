import React from "react";
import cn from "classnames";
import "../App.css";

const Toolbar = ({ selectFilter, filters, selected }) => {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter, i) => (
        <button
          key={i}
          className={cn({ "App-link": selected === filter })}
          onClick={() => selectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
