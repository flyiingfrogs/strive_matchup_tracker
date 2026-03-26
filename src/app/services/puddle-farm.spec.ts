import { TestBed } from '@angular/core/testing';

import { PuddleFarm } from './puddle-farm';

describe('PuddleFarm', () => {
  let service: PuddleFarm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuddleFarm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
