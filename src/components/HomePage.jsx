import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import useHomeStore from "../store/homeStore";
import { Link } from "react-router-dom";

function HomePage() {
  const countries = useHomeStore((state) => state.countries);
  const filterdCountries = useHomeStore((state) => state.filterdCountries);
  const fetchCountries = useHomeStore((state) => state.fetchCountries);
  const error = useHomeStore((state) => state.error);
  const loading = useHomeStore((state) => state.loading);
  const searchTerm = useHomeStore((state) => state.searchTerm);

  useEffect(() => {
    fetchCountries();
    console.log(countries);
  }, []);
  return (
    <>
      <Navbar />
      <SearchBar />
      {/* cards wrapper */}
      <div className="grid px-16 xl:grid-cols-4 pb-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center grid-cols-1 gap-8 ">
        {/* cards here */}
        {countries.length > 0 &&
          filterdCountries.length === 0 &&
          !searchTerm &&
          !loading &&
          !error &&
          countries.map((country, index) => {
            return (
              <Link
                key={index}
                to={`/details/${
                  country.cca2
                    ? country.cca2
                    : country.cca3
                    ? country.cca3
                    : country.ccn3
                    ? country.ccn3
                    : country.cioc
                }`}
              >
                <Card country={country} />
              </Link>
            );
          })}
        {filterdCountries.length > 0 &&
          !loading &&
          !error &&
          filterdCountries.map((country, index) => {
            return (
              <Link 
              key={index} 
              to={`/details/${
                country.cca2
                  ? country.cca2
                  : country.cca3
                  ? country.cca3
                  : country.ccn3
                  ? country.ccn3
                  : country.cioc
              }`}
              >
                <Card country={country} />
              </Link>
            );
          })}
        {loading && !error && countries.length === 0 && (
          <div className="mx-auto absolute md:right-1/2 md:top-1/2 top-[20rem] right-[40%] loader "></div>
        )}
        {searchTerm && filterdCountries.length === 0 && !loading && !error && (
          <div>Nothing matched your search term</div>
        )}
        {error && !loading && countries.length === 0 && (
          <div>Error Fetching Data</div>
        )}
      </div>
    </>
  );
}

export default HomePage;
