import Leaderboard from "@/components/leaderboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-Arco py-16 h-screen items-center bg-[url('/images/bg.svg')] bg-cover">
      <div className=" w-full h-36  relative">
        <Image src={"/images/heading.svg"} alt="heading" fill />
      </div>
      <div className="px-36 w-full ">
        <h2 className="text-4xl text-black my-8">TODAY</h2>
        <Leaderboard period="ALL_TIME" />
        <h2 className="text-4xl text-black my-8">ALL TIME</h2>
        <Leaderboard period="ALL_TIME" />
      </div>
      <div className="flex gap-5 absolute right-8 bottom-10">
        <Image
          src={"/images/phrase_1.svg"}
          alt="heading"
          width={550}
          height={180}
        />
        <Image
          src={"/images/pointer.svg"}
          alt="heading"
          width={80}
          height={80}
        />
        <Image src={"/images/qr.svg"} alt="heading" width={140} height={140} />
      </div>
    </div>
  );
}
