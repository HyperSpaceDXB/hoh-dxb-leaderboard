"use client";

import { useState, useEffect } from "react";
import LeaderBoard from "./leaderBoard";
import { useLeaders } from "@/hooks/useLeaders";
import ParxQR from "./parxQR";

export default function AlternatingLeaderboard() {
  const [displaySwitch, setDisplaySwitch] = useState(0);
  const { isLoading, data, error } = useLeaders({ period: "ALL_TIME" });
  const {
    isLoading: dailyLoading,
    data: dailyData,
    error: dailyError,
  } = useLeaders({ period: "DAY" });

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplaySwitch((prev) => (prev + 1) % 4); // Toggle the component
    }, 10000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (isLoading || dailyLoading) {
    return <div>Loading...</div>;
  }

  if (error || dailyError) {
    return <div>Error...</div>;
  }

  switch (displaySwitch) {
    case 0:
      return (
        <div>
          <div className="flex justify-between text-green text-[70px] my-[50px] 2xl:mb-[35px] w-[1900px] 2xl:w-[3460px]">
            <p>All Time</p>
            <p className="font-geSS">المتفوقون دائماً</p>
          </div>
          <LeaderBoard data={data} />
        </div>
      );
    case 1:
      return <ParxQR />;
    case 2:
      return (
        <div>
          <div className="flex justify-between text-green text-[70px] my-[50px] 2xl:mb-[35px] w-[1900px] 2xl:w-[3460px]">
            <p>Daily</p>
            <p className="font-geSS">المتفوقون اليوم</p>
          </div>
          <LeaderBoard data={dailyData} />
        </div>
      );
    case 3:
      return <ParxQR />;
  }
}
