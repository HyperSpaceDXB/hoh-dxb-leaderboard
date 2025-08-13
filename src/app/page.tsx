import Leaderboard from "@/components/leaderboard";

import Stickers from "@/components/stickers";
import { fetchLeaders } from "@/helpers";
import { ILeader } from "@/types";
import Image from "next/image";
export const revalidate = 60;

export default async function Home() {
  const dailyData: ILeader[] = await fetchLeaders("DAY");
  const allTimeData: ILeader[] = await fetchLeaders("ALL_TIME");

  return (
    <div className="font-Arco h-screen  bg-[url('/images/bg.svg')] bg-cover pt-[2vw]  landscape:flex landscape:flex-col landscape:justify-start landscape:items-center">
      <div className="relative h-[16vw] m-[2vw]  landscape:w-[60vw] landscape:h-[11vw] landscape:m-0 mt-[1vw]">
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div className="w-full px-[4vw] landscape:px-[2vw] landscape:pt-[1vw] landscape:flex landscape:justify-between landscape:gap-[3vw]">
        <Leaderboard dailyData={dailyData} data={allTimeData} />
      </div>
      <Stickers />
    </div>
  );
}
