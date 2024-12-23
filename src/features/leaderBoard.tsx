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
        duration: 1, // Animation duration in seconds
        repeat: 0, // Infinite loop
      });

      tl.to(
        "#leader",
        {
          rotateX: 0, // Reset rotation
          duration: 1, // Duration for stopping
          stagger: 0.3, // Delay between stopping each box
        },
        "="
      );
    },
    { scope: ref, dependencies: [data] }
  );
  return (
    <div ref={ref}>
      {data?.map((leader) => (
        <Leader key={leader.id} {...leader} />
      ))}
    </div>
  );
};

export default LeaderBoard;
