"use client";
import Leader from "@/components/leader";
import { FC, useRef } from "react";
import { useLeaders } from "@/hooks/useLeaders";
import { Period } from "@/types";

const Leaderboard: FC<{ period: Period }> = ({ period }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { data: data } = useLeaders({ period: period });

  const displayData = data?.slice(0, 6);

  return (
    <div className="flex flex-col gap-5 2xl:gap-3 " ref={ref}>
      {displayData?.map((leader, index) => (
        <Leader key={leader.id} {...leader} delay={index * 500} />
      ))}
    </div>
  );
};

export default Leaderboard;
