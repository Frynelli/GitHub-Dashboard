
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Repositories = ({ info, index, totalItems, moveItemCallback }) => {
  // Destructuring info object to get individual repository properties
  const { name, description, language, stargazers_count } = info;

  // Move up and down function
  const moveItem = (direction) => {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < totalItems) {
      // Call the moveItemCallback function passed from the layoutPage
      moveItemCallback(index, newIndex);
    }
  };

  return (
    <ul className="lists">
      <li>
        <span>
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <br />
          <p className="language">
            <GoDotFill />
            {language}
          </p>
        </span>
        <div className="btn-repo">
        <div className="star">
          <span>{stargazers_count}</span>
          <span>
            <FaRegStar />
          </span>
        </div>
        <span className="arrows">
            {/* Pass the direction to the moveItem function */}
            <button onClick={() => moveItem(-1)} disabled={index === 0}>
              <IoIosArrowUp />
            </button>
            <button
              onClick={() => moveItem(1)}
              disabled={index === totalItems - 1}
            >
              <IoIosArrowDown />
            </button>
          </span>
          </div>
      </li>
    </ul>
  );
};

export default Repositories;
