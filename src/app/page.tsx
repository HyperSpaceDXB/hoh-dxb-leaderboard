import Heading from "@/components/heading";
import AlternatingLeaderboard from "@/features/alternatingLeaderboards";

export default function Home() {
  return (
    <div className="font-PPMon p-[120px] flex flex-col justify-between  h-screen">
      <Heading />
      <AlternatingLeaderboard />
    </div>
  );
}
