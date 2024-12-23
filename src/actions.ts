"use server";

import { Leader } from "./types";
import { Period } from "./types";

export const fetchLeadersAction = async (period: Period): Promise<Leader[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/park/leaderboard/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        period,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch leaders: ${response.status}`);
  }

  return response.json();
};
