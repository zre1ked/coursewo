import { TestBed } from '@angular/core/testing';

import { AlphaTestService } from './alpha-test.service';

describe('AlphaTestService', () => {
  let service: AlphaTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
