import { Component } from '@angular/core';
import { CHARACTERS } from '../../data/characters';
import { KeyValuePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-character-sidebar',
  imports: [KeyValuePipe, RouterModule],
  templateUrl: './character-sidebar.html',
  styleUrl: './character-sidebar.scss',
})
export class CharacterSidebar {

  characters = CHARACTERS;

}
