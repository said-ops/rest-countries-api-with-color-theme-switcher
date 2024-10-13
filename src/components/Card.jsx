import React from "react";

function Card({country}) {
  return (
    <div className="h-[340px] w-[264px] flex flex-col shadow-md rounded-md overflow-hidden bg-element-light dark:bg-element-dark dark:text-text-dark">
      {/* flag */}
      <div className="h-1/2">
        <img
          className="object-cover w-full h-full"
          src={country.flags.png||country.flags.svg}
          alt="flag"
        />
      </div>
      {/* infos */}
      <div className="h-1/2 p-6  flex flex-col gap-4 ">
        {/* country name */}
        <h2 className="font-bold text-xl">{country.name.common}</h2>
        {/* details */}
        <div className="flex flex-col">
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Population
            </span>
            : {country.population}
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Region
            </span>
            : {country.region}
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            <span className="font-semibold  text-md text-text-light dark:text-text-dark">
              Capital
            </span>
            : {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
