import { Component, Input } from '@angular/core';
import { PuddleFarmService } from '../../services/puddle-farm.service';
import { MatchupEntry } from '../../models/matchup-entry';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CHARACTERS } from '../../data/characters';


@Component({
  selector: 'app-character-details',
  imports: [AsyncPipe],
  templateUrl: './character-details.html',
  styleUrl: './character-details.scss',
})
export class CharacterDetails {

  constructor(private puddle: PuddleFarmService) {}

  matchups$: Observable<MatchupEntry[]> | null = null;
  _selectedChar: string | null = null;
  characters = CHARACTERS;

  @Input() set selectedChar(value: string | null) {

    if (value == null) {
      return;
    }

    this._selectedChar = value;

    this.matchups$ = this.puddle.getPlayerMatchups(localStorage.getItem('playerId')!, value).pipe(
      map(response => response.matchups)
    );
  }
  


}
