import Heading from "@/components/heading";
import AlternatingLeaderboard from "@/features/alternatingLeaderboards";

export default function Home() {
  return (
    <div className="font-PPMon py-[170px] 2xl:py-[100px] px-[170px] flex flex-col justify-between h-screen items-center bg-[url('/images/bg.svg')] bg-cover">
      <Heading />
      <AlternatingLeaderboard />
    </div>
  );
}
