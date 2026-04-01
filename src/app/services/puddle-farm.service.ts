import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response';
import { MatchupCharResponse } from '../models/matchup-char-response';

@Injectable({
  providedIn: 'root',
})
export class PuddleFarmService {
  private readonly ALL_TIME_DURATION = 99999;
  constructor(private http: HttpClient) {}

  searchPlayer(name: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`/api/player/search?search_string=${name}`);
  }

  getPlayerMatchups(playerId: number, charId: string, history: number = this.ALL_TIME_DURATION): Observable<MatchupCharResponse> {
    return this.http.get<MatchupCharResponse>(`/api/matchups/${playerId}/${charId}/${history}`)
  }
}
