import React from "react";

function SearchBar() {
  return (
    <form
      action="#"
      className="flex flex-col gap-8 md:flex-row justify-between px-16 text-text-light  dark:text-text-dark"
    >
      {/* input */}
      <div className="flex gap-4 h-12 items-center px-8 md:w-[30rem] shadow-lg rounded-md bg-element-light dark:bg-element-dark">
        <label htmlFor="search">
          <img src="/images/search-icon.svg" alt="search countries" />
        </label>
        <input
          className="h-full w-full outline-none border-none bg-element-light text-text-light dark:bg-element-dark dark:text-text-dark"
          type="text"
          id="search"
          placeholder="Search for a country..."
        />
      </div>
      {/* select  */}
      <select
        className=" shadow-lg bg-element-light outline-none border-none dark:bg-element-dark p-4"
        name="region"
        id="region"
        defaultValue=""
      >
        <option value="" disabled>
          Filter by region
        </option>
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}

export default SearchBar;
