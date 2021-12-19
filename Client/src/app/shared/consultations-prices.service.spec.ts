import { TestBed } from '@angular/core/testing';

import { ConsultationsPricesService } from './consultations-prices.service';

describe('ConsultationsPricesService', () => {
  let service: ConsultationsPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationsPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
