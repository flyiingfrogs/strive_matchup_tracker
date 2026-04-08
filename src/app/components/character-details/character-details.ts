import { Component, Input, inject } from '@angular/core';
import { PuddleFarmService } from '../../services/puddle-farm.service';
import { MatchupEntry } from '../../models/matchup-entry';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CHARACTERS } from '../../data/characters';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [AsyncPipe],
  templateUrl: './character-details.html',
  styleUrl: './character-details.scss',
})
export class CharacterDetails {

  route: ActivatedRoute = inject(ActivatedRoute);
  selectedCharRoute: string | null = null;
  matchups$: Observable<MatchupEntry[]> | null = null;
  characters = CHARACTERS;
  puddle = inject(PuddleFarmService);
  constructor() {
    this.route.params.subscribe(params => {
      this.selectedCharRoute = params['id']
    
      this.matchups$ = this.puddle.getPlayerMatchups(localStorage.getItem('playerId')!, this.selectedCharRoute!).pipe(
        map(response => response.matchups)
      );
    });
  }


}
