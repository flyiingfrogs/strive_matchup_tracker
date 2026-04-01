import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response';
import { MatchupCharResponse } from '../models/matchup-char-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PuddleFarmService {
  private readonly ALL_TIME_DURATION = 99999;
  constructor(private http: HttpClient) {}

  searchPlayer(name: string): Observable<SearchResponse> {
    return this.http.get(`/api/player/search?search_string=${name}`, { responseType: 'text'}).pipe(
      map(text => JSON.parse(text.replace(/"id":(\d+)/g, '"id":"$1"')) as SearchResponse)
    );
  }

  getPlayerMatchups(playerId: string, charId: string, history: number = this.ALL_TIME_DURATION): Observable<MatchupCharResponse> {
    console.log("api link", `/api/matchups/${playerId}/${charId}/${history}`)
    return this.http.get<MatchupCharResponse>(`/api/matchups/${playerId}/${charId}/${history}`)
  }
}
