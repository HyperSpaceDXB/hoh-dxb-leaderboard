import { ILeader, Period } from "./types";

export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const fetchLeaders = async (period: Period): Promise<ILeader[]> => {
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
      next: { revalidate: 60 }, // Revalidate every minute
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch leaders: ${response.status}`);
  }

  return response.json();
};
