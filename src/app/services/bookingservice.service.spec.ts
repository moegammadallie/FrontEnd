import { TestBed } from '@angular/core/testing';

import { BookingserviceService } from './bookingservice.service';

describe('BookingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingserviceService = TestBed.get(BookingserviceService);
    expect(service).toBeTruthy();
  });
});
