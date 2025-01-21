import Leaderboard from "@/components/leaderboard";

import Stickers from "@/components/stickers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-Arco py-2 h-screen  bg-[url('/images/bg.svg')] bg-cover 2xl:flex 2xl:flex-col 2xl:justify-start items-center 2xl:pb-0">
      <div className=" 2xl:w-[2200px] 2xl:h-[450px]  h-[350px] m-12 mt-32 2xl:m-6 2xl:mt-28  relative">
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div className="px-14 2xl:px-16 w-full 2xl:flex 2xl:justify-between 2xl:gap-32">
        <Leaderboard />
      </div>
      <Stickers />
    </div>
  );
}
