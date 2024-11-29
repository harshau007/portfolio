"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
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
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm mx-auto md:max-w-xl lg:max-w-none">
          {activityData.length > 0 ? (
            <ActivityCalendar
              colorScheme={theme === "light" ? "light" : "dark"}
              theme={{
                light: ["#f0f0f0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              data={activityData}
              showWeekdayLabels
              blockSize={12}
              blockRadius={2}
              blockMargin={4}
              fontSize={14}
              hideColorLegend
              hideMonthLabels
            />
          ) : (
            <ActivityCalendar data={[]} loading />
          )}
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseYear}
          disabled={currYear === 2019}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="flex items-center font-medium">{currYear}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={increaseYear}
          disabled={currYear === new Date().getFullYear()}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <GithubContributions />
    </div>
  );
};

export default Github;
