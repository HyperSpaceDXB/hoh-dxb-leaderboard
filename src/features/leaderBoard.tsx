"use client";
import Leader from "@/components/leader";
import { ILeader } from "@/types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";

const LeaderBoard: FC<{ data: ILeader[] | null }> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
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

  const column1 = data?.slice(0, 5);
  const column2 = data?.slice(5);
  return (
    <div
      ref={ref}
      className="flex flex-col 2xl:flex-row w-full justify-center  gap-[100px]"
    >
      <div className="flex flex-col gap-[100px] ">
        {column1?.map((leader) => (
          <Leader key={leader.id} {...leader} />
        ))}
      </div>
      <div className="flex flex-col gap-[100px]">
        {column2?.map((leader) => (
          <Leader key={leader.id} {...leader} />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
