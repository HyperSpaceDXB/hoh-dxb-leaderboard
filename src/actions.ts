"use server";

import { ILeader } from "./types";
import { Period } from "./types";

export const fetchLeadersAction = async (
  period: Period
): Promise<ILeader[]> => {
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
        park_id: process.env.NEXT_PUBLIC_PARK_ID,
      }),
      cache: "no-store", // Disable caching
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch leaders: ${response.status}`);
  }

  return response.json();
};
