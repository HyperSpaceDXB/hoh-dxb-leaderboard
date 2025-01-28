"use client";
import Leaderboard from "@/components/leaderboard";

import Stickers from "@/components/stickers";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";

export default function Home() {
  const isPortrait = useIsPortrait();
  return (
    <div
      className={`font-Arco h-screen  bg-[url('/images/bg.svg')] bg-cover pt-[2vw] ${
        isPortrait ? "" : "flex flex-col justify-start items-center"
      }`}
    >
      <div
        className={`relative ${
          isPortrait ? " h-[16vw] m-[2vw] " : "w-[60vw] h-[11vw] m-0 mt-[1vw]"
        }`}
      >
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div
        className={`w-full ${
          isPortrait
            ? "px-[4vw]"
            : "px-[2vw] pt-[1vw] flex justify-between gap-[3vw]"
        } `}
      >
        <Leaderboard />
      </div>
      <Stickers />
    </div>
  );
}
