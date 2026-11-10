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
    return this.http.get(`ggst/api/player/search?search_string=${name}&exact=false`, { responseType: 'text'}).pipe(
      map(text => JSON.parse(text.replace(/"id":(\d+)/g, '"id":"$1"')) as SearchResponse)
    );
  }

  getPlayerMatchups(playerId: string, charId: string, history: number = this.ALL_TIME_DURATION): Observable<MatchupCharResponse> {
    return this.http.get<MatchupCharResponse>(`ggst/api/matchups/${playerId}/${charId}/${history}`)
  }
}
