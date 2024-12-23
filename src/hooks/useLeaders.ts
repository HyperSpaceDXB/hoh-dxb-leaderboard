import { Leader, Period } from "../types";
import { fetchLeadersAction } from "@/actions";
import useSwr from "./swr";

export const useLeaders = ({
  period = "ALL_TIME",
}: {
  period: Period;
}): {
  data: Leader[] | null;
  isLoading: boolean;
  error: Error | null;
} =>
  useSwr("/api/park/leaderboard/", () => fetchLeadersAction(period), {
    refreshInterval: 60000,
  });
