"use client";
import React, { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { useTheme } from "next-themes";
import GithubContributions from "./contribution";

const Github = () => {
  const [activityData, setActivityData] = useState([]);
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const { theme } = useTheme();

  async function fetchGitHubActivity() {
    try {
      const url = `https://github-contributions-api.jogruber.de/v4/harshau007`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub activity");
      }
      const data = await response.json();
      const commitEvents = data.contributions || [];

      const filterData = commitEvents.filter((event: any) => {
        return new Date(event.date).getFullYear() === currYear;
      });
      return filterData;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubActivity();
      setActivityData(data);
    };
    fetchData();
  }, [currYear]);

  const increaseYear = () => {
    if (currYear < new Date().getFullYear()) {
      setCurrYear(currYear + 1);
    }
  };

  const decreaseYear = () => {
    if (currYear > 2019) {
      setCurrYear(currYear - 1);
    }
  };

  return (
    <>
      <div className="flex items-center mt-8">
        <div className="w-full max-w-sm mx-auto md:max-w-xl lg:max-w-none lg:pl-10">
          {activityData.length > 0 ? (
            <ActivityCalendar
              colorScheme={theme === "light" ? "light" : "dark"}
              theme={{
                light: ["#deddda", "#9be9a8", "#40c463", "#30a14e", "#216e39"], // Background, low activity, moderate activity, high activity, text
                dark: ["#ffffff", "#9be9a8", "#40c463", "#30a14e", "#216e39"], // Background, low activity, moderate activity, high activity, text
              }}
              data={activityData}
              showWeekdayLabels
              blockSize={14}
              blockRadius={4}
              blockMargin={6}
              fontSize={16}
            />
          ) : (
            <ActivityCalendar data={[]} loading />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-[#1f2021] text-white px-7 py-3 rounded-full enabled:hover:scale-105 enabled:hover:bg-[#323436] enabled:transition disabled:cursor-not-allowed disabled:bg-[#4d4d4d]"
          onClick={decreaseYear}
          disabled={currYear == 2019}
        >
          &lt;-
        </button>
        <button
          className="px-4 py-2 bg-[#1f2021] text-white px-7 py-3 rounded-full enabled:hover:scale-105 enabled:hover:bg-[#323436] enabled:transition disabled:cursor-not-allowed disabled:bg-[#4d4d4d]"
          onClick={increaseYear}
          disabled={currYear === new Date().getFullYear()}
        >
          -&gt;
        </button>
      </div>
      <GithubContributions />
    </>
  );
};

export default Github;
