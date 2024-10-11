import React from "react";

function TaskFilter({ setFilter, activeFilter }) {
  const filters = ["All", "Completed", "Pending"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={activeFilter === filter ? "active" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
