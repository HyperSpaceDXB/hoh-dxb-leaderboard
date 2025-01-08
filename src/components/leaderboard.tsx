"use client";
import Leader from "@/components/leader";
import { FC, useRef } from "react";
import { useLeaders } from "@/hooks/useLeaders";
import { Period } from "@/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Leaderboard: FC<{ period: Period }> = ({ period }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { data: data } = useLeaders({ period: period });

  useGSAP(
    () => {
      if (!ref.current) return;
      const tl = gsap.timeline();
      tl.to("#leader", {
        rotateX: 4320, // Rotate along the horizontal axis
        duration: 0, // Animation duration in seconds
        repeat: 0, // Infinite loop
      });

      tl.to(
        "#leader",
        {
          rotateX: 0, // Reset rotation
          duration: 0.5, // Duration for stopping
          stagger: 0.2, // Delay between stopping each box
        },
        "="
      );
    },
    { scope: ref, dependencies: [data] }
  );

  const displayData = data?.slice(0, 6);

  return (
    <div className="flex flex-col gap-5 2xl:gap-3 " ref={ref}>
      {displayData?.map((leader) => (
        <Leader key={leader.id} {...leader} />
      ))}
    </div>
  );
};

export default Leaderboard;
