import { Component, OnInit } from '@angular/core';
import { CharacterSidebar } from './components/character-sidebar/character-sidebar';
import { CharacterDetails } from './components/character-details/character-details';
import { PlayerSetup } from './components/player-setup/player-setup';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CharacterSidebar, CharacterDetails, PlayerSetup, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  playerId: string | null = null;
  selectedChar: string | null = null;
  
  ngOnInit() {
    const savedId = localStorage.getItem('playerId');

    if (savedId) {
      this.playerId = savedId;
    }
  }

  onPlayerSelected(id: string) {
    this.playerId = id;
  }

  onCharSelected(charId: string) {
    this.selectedChar = charId;
  }

  resetPlayer() {
    localStorage.removeItem('playerId');
    this.playerId = null;
  }
}
