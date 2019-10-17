import { TestBed } from '@angular/core/testing';

import { PhysioserviceService } from './physioservice.service';

describe('PhysioserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhysioserviceService = TestBed.get(PhysioserviceService);
    expect(service).toBeTruthy();
  });
});
