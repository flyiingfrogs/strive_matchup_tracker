import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupHist } from './matchup-hist';

describe('MatchupHist', () => {
  let component: MatchupHist;
  let fixture: ComponentFixture<MatchupHist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchupHist],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchupHist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
