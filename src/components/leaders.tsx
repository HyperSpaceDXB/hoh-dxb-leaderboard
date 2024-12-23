"use client";
import { useLeaders } from "@/hooks/useLeaders";
import { FC } from "react";

const Leaders: FC = () => {
  const res = useLeaders({ period: "ALL_TIME" });
  console.log(res);
  return <div>Leaders</div>;
};

export default Leaders;
