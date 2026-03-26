import { MatchupEntry } from "./matchup-entry";

export interface MatchupCharResponse {
    char_name: string;
    char_short: string;
    matchups: MatchupEntry[];
}