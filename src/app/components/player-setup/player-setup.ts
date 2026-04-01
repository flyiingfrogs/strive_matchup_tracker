import { Component, EventEmitter, Output } from '@angular/core';
import { PuddleFarmService } from '../../services/puddle-farm.service';
import { FormsModule } from '@angular/forms';
import { PlayerSearchResponse } from '../../models/player-search-response';

@Component({
  selector: 'app-player-setup',
  imports: [FormsModule],
  templateUrl: './player-setup.html',
  styleUrl: './player-setup.scss',
})
export class PlayerSetup {
  constructor(private puddle: PuddleFarmService) {}

  searchQuery: string = '';
  searchResults: PlayerSearchResponse[] = [];

  @Output() playerSelected = new EventEmitter<string>();

  onSearch() {
    console.log('search clicked', this.searchQuery);
    this.puddle.searchPlayer(this.searchQuery).subscribe( response => {
      console.log('response', response);
      this.searchResults = response.results.filter(
        (player, index, self) => self.findIndex(p => p.id === player.id) === index
      );
      console.log('searchResults after filter', this.searchResults);
    })
  };

  selectPlayer(player: PlayerSearchResponse) {
    console.log('selectPlayer called', player)
    console.log('id type: ', typeof player.id);
    localStorage.setItem('playerId', player.id);
    console.log('localStorage set', localStorage.getItem('playerId'));
    this.playerSelected.emit(player.id);
    console.log('event emitted');
  }
}
