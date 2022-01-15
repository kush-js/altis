import { TestBed } from '@angular/core/testing';

import { GlobalstuffService } from './globalstuff.service';

describe('GlobalstuffService', () => {
  let service: GlobalstuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalstuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
