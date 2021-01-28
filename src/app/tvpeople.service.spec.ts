import { TestBed } from '@angular/core/testing';

import { TvpeopleService } from './tvpeople.service';

describe('TvpeopleService', () => {
  let service: TvpeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvpeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
