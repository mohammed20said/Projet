import { TestBed } from '@angular/core/testing';

import { CatastropheService } from './catastrophe.service';

describe('CatastropheService', () => {
  let service: CatastropheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatastropheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
