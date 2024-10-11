import React from "react";

function Card() {
  return (
    <div className="min-h-[340px] w-[264px] flex flex-col shadow-md bg-element-light dark:bg-element-dark dark:text-text-dark">
      {/* flag */}
      <div className="h-1/2">
        <img
          className="object-cover"
          src="https://flagcdn.com/w320/ga.png"
          alt="flag"
        />
      </div>
      {/* infos */}
      <div className="h-1/2 p-6  flex flex-col gap-4 ">
        {/* country name */}
        <h2 className="font-bold text-xl">Belgium</h2>
        {/* details */}
        <div className="flex flex-col">
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Population
            </span>
            : 100000
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Region
            </span>
            : Europe
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Capital
            </span>
            : Berlin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
