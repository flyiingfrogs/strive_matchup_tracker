import { Component } from '@angular/core';
import { PuddleFarmService } from '../../services/puddle-farm.service';

@Component({
  selector: 'app-character-sidebar',
  imports: [],
  templateUrl: './character-sidebar.html',
  styleUrl: './character-sidebar.scss',
})
export class CharacterSidebar {

  constructor(private puddle: PuddleFarmService) {}
}
