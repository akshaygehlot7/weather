"use client";

import React, { useState } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
//import '../.env'

//const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=da4dae2ec24541dc915121531240705&q=${location}&days=7&aqi=yes&alerts=yes`

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  // const url = `http://api.weatherapi.com/v1/forecast.json?key=da4dae2ec24541dc915121531240705&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=da4dae2ec24541dc915121531240705&q=${location}&days=7&aqi=yes&alerts=yes`
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <>
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div></>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
      
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <>
    {/* <Navbar /> */}
    <div className="mb-20 bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white text-2xl py-2 px-4 rounded-xl italic font-bold">
            Weather App.
          </h1>
        </div>
        {content}
        {/* {data.current ? <div>{data.current.temp_f}</div> : null} */}
      </div>
    </div>
    </>
  )
}

export default Home
