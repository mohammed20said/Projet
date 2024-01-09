import { TestBed } from '@angular/core/testing';

import { AssistenceService } from './assistence.service';

describe('AssistenceService', () => {
  let service: AssistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
