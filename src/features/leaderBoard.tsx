"use client";
import Leader from "@/components/leader";
import { ILeader } from "@/types";
import { FC } from "react";

const LeaderBoard: FC<{ data: ILeader[] | null }> = ({ data }) => {
  return (
    <div>
      {data?.map((leader) => (
        <Leader key={leader.id} {...leader} />
      ))}
    </div>
  );
};

export default LeaderBoard;
