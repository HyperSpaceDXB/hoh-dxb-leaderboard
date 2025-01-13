"use client";
import Leader from "@/components/leader";
import { FC, useEffect, useRef, useState } from "react";
import { useLeaders } from "@/hooks/useLeaders";

const Leaderboard: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { data: dailyData, isLoading: dailyIsLoading } = useLeaders({
    period: "ALL_TIME",
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

  return (
    show && (
      <>
        <div className="2xl:w-1/2">
          <h2 className="text-8xl text-black my-16 2xl:my-20">TODAY</h2>
          <div className="flex flex-col gap-6 2xl:gap-10 " ref={ref}>
            {dailyData?.slice(0, 6).map((leader, index) => (
              <Leader key={leader.id} {...leader} delay={index * 400} />
            ))}
          </div>
        </div>
        <div className="2xl:w-1/2">
          <h2 className="text-8xl text-black my-16 2xl:my-20  2xl:text-right">
            ALL TIME
          </h2>
          <div className="flex flex-col gap-6 2xl:gap-10 " ref={ref}>
            {data?.slice(0, 6).map((leader, index) => (
              <Leader key={leader.id} {...leader} delay={index * 400} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Leaderboard;
