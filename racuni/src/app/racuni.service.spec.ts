import { TestBed } from '@angular/core/testing';

import { RacuniService } from './racuni.service';

describe('RacuniService', () => {
  let service: RacuniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacuniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
