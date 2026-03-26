import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSidebar } from './character-sidebar';

describe('CharacterSidebar', () => {
  let component: CharacterSidebar;
  let fixture: ComponentFixture<CharacterSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
