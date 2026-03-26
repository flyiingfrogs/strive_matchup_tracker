import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNotes } from './character-notes';

describe('CharacterNotes', () => {
  let component: CharacterNotes;
  let fixture: ComponentFixture<CharacterNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
