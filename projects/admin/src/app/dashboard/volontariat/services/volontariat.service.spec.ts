import { TestBed } from '@angular/core/testing';

import { VolontariatService } from './volontariat.service';

describe('VolontariatService', () => {
  let service: VolontariatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolontariatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
