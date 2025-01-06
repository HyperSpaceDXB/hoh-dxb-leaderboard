"use client";
import Leader from "@/components/leader";
import { FC, useRef } from "react";
import { useLeaders } from "@/hooks/useLeaders";
import { Period } from "@/types";

const Leaderboard: FC<{ period: Period }> = ({ period }) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    isLoading: isLoading,
    data: data,
    error: error,
  } = useLeaders({ period: period });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const displayData = data?.slice(0, 6);

  return (
    <div className="flex flex-col gap-5 " ref={ref}>
      {displayData?.map((leader) => (
        <Leader key={leader.id} {...leader} />
      ))}
    </div>
  );
};

export default Leaderboard;
