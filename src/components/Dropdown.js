import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

const Dropdown = ({ options, setProjectsLength, projects }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleAllProjects = () => {
    setProjectsLength(projects.length);
    setShowDropDown(false);
  };

  console.log(projects.length);

  return (
    <>
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        style={{ display: "flex", alignItems: "center" }}
      >
        Dropdown
        {showDropDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </button>
      {showDropDown ? (
        <div className="dropdown-container">
          <ul>
            {options.map((option) => (
              <li key={option}>
                <button onClick={handleAllProjects}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
