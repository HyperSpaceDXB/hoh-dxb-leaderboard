"use client";
import Leader from "@/components/leader";
import { FC, useEffect, useRef, useState } from "react";
import { useLeaders } from "@/hooks/useLeaders";
import useIsPortrait from "@/hooks/useIsPortrait";
import { ILeader } from "@/types";

const Leaderboard: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isPortrait = useIsPortrait();

  const { data: dailyData, isLoading: dailyIsLoading } = useLeaders({
    period: "DAY",
  });
  const { data: data, isLoading: isLoading } = useLeaders({
    period: "ALL_TIME",
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading || dailyIsLoading) {
      setShow(false);
    } else {
      if (data && dailyData) {
        setShow(true);
      }
    }
  }, [isLoading, dailyIsLoading, data, dailyData]);
  let allTimeData: ILeader[] = [];
  if (data) {
    allTimeData = data.filter((item) => item.hypercoins_earned < 1000000);
  }
  return (
    show && (
      <>
        <div className={` ${!isPortrait && "w-1/2"}`}>
          <h2
            className={` ${
              isPortrait ? "text-[4.5vw] my-[1.5vw]" : "text-[2.5vw] my-[1vw]"
            } text-black`}
          >
            TODAY
          </h2>
          <div
            className={`flex flex-col ${
              isPortrait ? "gap-[2vw]" : "gap-[1vw]"
            }`}
            ref={ref}
          >
            {dailyData?.slice(0, 6).map((leader) => (
              <Leader key={leader.id} {...leader} />
            ))}
          </div>
        </div>
        <div className={` ${!isPortrait && "w-1/2"}`}>
          <h2
            className={` ${
              isPortrait
                ? "text-[4.5vw] my-[1.5vw]"
                : "text-[2.5vw] my-[1vw] text-right"
            } text-black`}
          >
            ALL TIME
          </h2>
          <div
            className={`flex flex-col ${
              isPortrait ? "gap-[2vw]" : "gap-[1vw]"
            }`}
            ref={ref}
          >
            {allTimeData?.slice(0, 6).map((leader, index) => (
              <Leader key={leader.id} {...leader} position={index + 1} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Leaderboard;
