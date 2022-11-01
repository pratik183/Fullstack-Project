import { TestBed } from '@angular/core/testing';

import { SavingadvisorService } from './savingadvisor.service';

describe('SavingadvisorService', () => {
  let service: SavingadvisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingadvisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
