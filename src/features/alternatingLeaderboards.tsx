"use client";

import { useState, useEffect } from "react";
import LeaderBoard from "./leaderBoard";
import { useLeaders } from "@/hooks/useLeaders";

export default function AlternatingLeaderboard() {
  const [showAllTime, setShowAllTime] = useState(true);
  const { isLoading, data, error } = useLeaders({ period: "ALL_TIME" });
  const {
    isLoading: dailyLoading,
    data: dailyData,
    error: dailyError,
  } = useLeaders({ period: "DAY" });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAllTime((prev) => !prev); // Toggle the component
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // if (isLoading || dailyLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || dailyError) {
  //   return <div>Error...</div>;
  // }

  return (
    <div>
      <h1>{showAllTime ? "All Time" : "Daily"}</h1>
      {showAllTime ? (
        <LeaderBoard data={data} />
      ) : (
        <LeaderBoard data={dailyData} />
      )}
    </div>
  );
}
