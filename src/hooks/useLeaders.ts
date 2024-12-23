import { ILeader, Period } from "../types";
import { fetchLeadersAction } from "@/actions";
import useSwr from "./swr";

export const useLeaders = ({
  period = "ALL_TIME",
}: {
  period: Period;
}): {
  data: ILeader[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  return useSwr(`${period}/leaderboard`, () => fetchLeadersAction(period), {
    refreshInterval: 60000,
  });
};
