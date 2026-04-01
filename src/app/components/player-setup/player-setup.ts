import { Component, EventEmitter, Output } from '@angular/core';
import { PuddleFarmService } from '../../services/puddle-farm.service';
import { FormsModule } from '@angular/forms';
import { PlayerSearchResponse } from '../../models/player-search-response';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-setup',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './player-setup.html',
  styleUrl: './player-setup.scss',
})
export class PlayerSetup {
  constructor(private puddle: PuddleFarmService) {}

  searchQuery: string = '';
  searchResults$: Observable<PlayerSearchResponse[]> | null = null;

  @Output() playerSelected = new EventEmitter<string>();

  onSearch() {
    console.log('search clicked', this.searchQuery);
    this.searchResults$ = this.puddle.searchPlayer(this.searchQuery).pipe(
      map(response => response.results.filter(
        (player, index, self) => self.findIndex(p => p.id === player.id) === index)
      )
    )
  }

  selectPlayer(player: PlayerSearchResponse) {
    console.log('selectPlayer called', player)
    console.log('id type: ', typeof player.id);
    localStorage.setItem('playerId', player.id);
    console.log('localStorage set', localStorage.getItem('playerId'));
    this.playerSelected.emit(player.id);
    console.log('event emitted');
  }
}