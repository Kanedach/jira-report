import { TestBed } from '@angular/core/testing';

import { Jira.FacadeService } from './jira.facade.service';

describe('Jira.FacadeService', () => {
  let service: Jira.FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jira.FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
