import { TestBed } from '@angular/core/testing';

import { EmabalsesService } from './emabalses.service';

describe('EmabalsesService', () => {
  let service: EmabalsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmabalsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
