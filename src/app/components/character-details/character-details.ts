import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.html',
  styleUrl: './character-details.scss',
})
export class CharacterDetails {

  @Input() selectedChar: string | null = null;
}
