export interface ILeader {
  avatar?: string;
  nickname: string;
  position: number;
  hypercoins_earned: number;
  avatar_thumbnail: string;
  id: string;
}

export type Period = "DAY" | "ALL_TIME";
