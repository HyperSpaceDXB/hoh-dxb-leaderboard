import Leader from "@/components/leader";
import { FC } from "react";
import { ILeader } from "@/types";

const Leaderboard: FC<{ data: ILeader[]; dailyData: ILeader[] }> = ({
  data,
  dailyData,
}) => {
  return (
    <>
      <div className="w-1/2 portrait:w-[unset]">
        <h2 className="text-black text-[2.5vw] my-[1vw] portrait:text-[4.5vw] portrait:my-[1.5vw]">
          TODAY
        </h2>
        <div className="flex flex-col gap-[1vw] portrait:gap-[2vw]">
          {dailyData?.slice(0, 6).map((leader) => (
            <Leader key={leader.id} {...leader} />
          ))}
        </div>
      </div>
      <div className="landscape:w-1/2">
        <h2 className="text-black text-[4.5vw] my-[1.5vw] landscape:text-[2.5vw] landscape:my-[1vw] landscape:text-right">
          ALL TIME
        </h2>
        <div className="flex flex-col gap-[1vw] portrait:gap-[2vw]">
          {data?.slice(0, 6).map((leader, index) => (
            <Leader key={leader.id} {...leader} position={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
