import React, { useEffect } from "react";
import Navbar from "./Navbar";
import useHomeStore from "../store/homeStore";
import { Link, useParams,useNavigate } from "react-router-dom";

function Details() {
  const theme = useHomeStore((state) => state.theme);
  const fetchDetails = useHomeStore((state) => state.fetchDetails);
  const details = useHomeStore((state) => state.details);
  const detailsLoading = useHomeStore((state) => state.detailsLoading);
  const detailsError = useHomeStore((state) => state.detailsError);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetails(id);
  }, [id]);
  return (
    <>
      <Navbar />
      <button onClick={()=>navigate(-1)} className="flex items-center gap-4 w-[8rem] h-10 p-4 md:ml-16 ml-4 hover:shadow-xl rounded-md shadow-md bg-element-light text-text-light dark:bg-element-dark dark:text-text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 6L3.35355 11.6464C3.15829 11.8417 3.15829 12.1583 3.35355 12.3536L9 18"
            stroke={`${theme === "dark" ? "white" : "black"}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12L21 12"
            stroke={`${theme === "dark" ? "white" : "black"}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back</span>
      </button>

      {/* details goes here */}
      {details && !detailsLoading && !detailsError && (
        <div className="md:px-16 p-4 pb-8 flex gap-8 flex-col md:flex-row md:gap-32 text-center md:text-left">
          {/* flag */}
          <div className="self-center ">
            <img
              className="object-fit md:w-[24.5rem] md:h-[18.5rem]"
              src={`https://flagcdn.com/w640/${details.cca2.toLowerCase()}.png`}
              alt="flag of"
            />
          </div>
          {/* stats */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-3xl ">{details.name.common}</h2>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Native Name
                  </span>
                  {/* : {country.population} */} : {details.name.official}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Population
                  </span>
                  {/* : {country.population} */} : {details.population}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Region
                  </span>
                  {/* : {country.region} */} : {details.region}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Sub Region
                  </span>
                  {/* : {country.capital} */} : {details.subregion}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Capital
                  </span>
                  {/* : {country.capital} */} : {details.capital}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Top Level Domain
                  </span>
                  {/* : {country.population} */} : {details.tld}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Currencies
                  </span>
                  {/* : {country.population} */} :{" "}
                  {Object.keys(details.currencies).map((key, index) => {
                    return <span key={index}>{key}</span>;
                  })}
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-semibold  text-md text-text-light dark:text-text-dark">
                    Languages
                  </span>
                  {/* : {country.region} */} :{" "}
                  {Object.keys(details.languages).map((key, index) => {
                    return <span key={index}>{key}</span>;
                  })}
                </p>
              </div>
            </div>
            {/* border countries */}
            {details.borders && (
              <div className="flex items-center flex-wrap gap-4">
                <span>Border Countries : </span>
                {details.borders.map((key, index) => {
                  return (
                   <Link key={index} to={`/details/${key}`}>
                     <span  className="bg-element-light text-text-light p-2 rounded-sm shadow-lg dark:bg-element-dark dark:text-text-dark">
                      {key}
                    </span>
                   </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
