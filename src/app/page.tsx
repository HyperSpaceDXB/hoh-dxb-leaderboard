import Leaderboard from "@/components/leaderboard";

import Stickers from "@/components/stickers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-Arco py-24 h-screen  bg-[url('/images/bg.svg')] bg-cover 2xl:flex 2xl:flex-col 2xl:justify-start 2xl:pb-0 2xl:pt-16">
      <div className=" w-full h-[330px] 2xl:h-96 2xl:pt-20   relative">
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div className="px-60 2xl:px-16 w-full 2xl:flex 2xl:justify-between 2xl:gap-32">
        <Leaderboard />
      </div>
      <Stickers />
    </div>
  );
}
