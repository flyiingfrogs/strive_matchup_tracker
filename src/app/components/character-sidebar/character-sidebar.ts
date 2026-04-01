import { Component, EventEmitter, Output } from '@angular/core';
import { CHARACTERS } from '../../data/characters';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-character-sidebar',
  imports: [KeyValuePipe],
  templateUrl: './character-sidebar.html',
  styleUrl: './character-sidebar.scss',
})
export class CharacterSidebar {

  characters = CHARACTERS;

  @Output() charSelected = new EventEmitter<string>();

  onCharClick(charId: string) {
    this.charSelected.emit(charId);
  }

}
