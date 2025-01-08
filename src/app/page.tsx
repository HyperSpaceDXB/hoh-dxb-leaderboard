import Leaderboard from "@/components/leaderboard";
import Stickers from "@/components/stickers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-Arco py-16 h-screen  bg-[url('/images/bg.svg')] bg-cover 2xl:flex 2xl:flex-col 2xl:justify-start 2xl:pb-0 2xl:pt-16">
      <div className=" w-full h-36 2xl:h-48 2xl:pt-20   relative">
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div className="px-36 2xl:px-16 w-full 2xl:flex 2xl:justify-between 2xl:gap-32">
        <div className="2xl:w-1/2">
          <h2 className="text-4xl text-black my-8 2xl:my-6">TODAY</h2>
          <Leaderboard period="ALL_TIME" />
        </div>
        <div className="2xl:w-1/2">
          <h2 className="text-4xl text-black my-8 2xl:my-6  2xl:text-right">
            ALL TIME
          </h2>
          <Leaderboard period="ALL_TIME" />
        </div>
      </div>
      <Stickers />
    </div>
  );
}
