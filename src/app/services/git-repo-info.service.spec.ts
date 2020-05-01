import { TestBed } from '@angular/core/testing';

import { GitRepoInfoService } from './git-repo-info.service';

describe('GitRepoInfoService', () => {
  let service: GitRepoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitRepoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
