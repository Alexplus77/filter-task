import React from "react";
import cn from "classnames";
import "../App.css";

const Toolbar = ({ handleSelectFilter, filters, selected }) => {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter, i) => (
        <button
          key={i}
          className={cn({ "App-link": selected === filter })}
          onClick={() => handleSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
