import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import useHomeStore from "../store/homeStore";

function HomePage() {
  const countries = useHomeStore((state) => state.countries);
  const filterdCountries = useHomeStore((state) => state.filterdCountries);
  const fetchCountries = useHomeStore((state) => state.fetchCountries);
  const error = useHomeStore((state) => state.error);
  const loading = useHomeStore((state) => state.loading);
  const searchTerm = useHomeStore((state) => state.searchTerm);

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <Navbar />
      <SearchBar />
      {/* cards wrapper */}
      <div className="grid px-16 xl:grid-cols-4 pb-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center grid-cols-1 gap-8 ">
        {/* cards here */}
        {countries.length>0 && filterdCountries.length===0&&
          !loading &&
          !error &&
          filterdCountries.map((country, index) => {
            return <Card country={country} key={index} />;
          })}
        {filterdCountries.length>0&&
          !loading &&
          !error &&
          filterdCountries.map((country, index) => {
            return <Card country={country} key={index} />;
          })}
        {loading && !error && countries.length === 0 && (
          <div className="mx-auto absolute md:right-1/2 md:top-1/2 top-[20rem] right-[40%] loader "></div>
        )}
         {searchTerm && filterdCountries.length === 0 && !loading && !error && (
          <div>Nothing matched your search term</div>
        )}
        {error&&!loading&&countries.length===0&&(<div>Error Fetching Data</div>)}
      </div>
    </>
  );
}

export default HomePage;
