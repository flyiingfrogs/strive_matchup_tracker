import { Component } from '@angular/core';
import { CharacterSidebar } from './components/character-sidebar/character-sidebar';
import { CharacterDetails } from './components/character-details/character-details';
import { PlayerSetup } from './components/player-setup/player-setup';


@Component({
  selector: 'app-root',
  imports: [CharacterSidebar, CharacterDetails, PlayerSetup],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  playerId: number | null = null;
  
  ngOnInit() {
    const savedId = localStorage.getItem('playerId');

    if (savedId) {
      this.playerId = Number(savedId);
    } else {
      this.playerId = null;
    }
  }
}
