import { TestBed } from '@angular/core/testing';

import { PerfsService } from './perfs.service';

describe('PerfsService', () => {
  let service: PerfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
