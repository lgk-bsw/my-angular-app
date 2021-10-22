import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a number to sum', () => {
    expect(service.sum).toEqual(0)
    service.addToSum(2)
    expect(service.sum).toEqual(2)
  })

  it('clear sum', () => {
    service.addToSum(2)
    expect(service.sum).toEqual(2)
    service.clearSum()
    expect(service.sum).toEqual(0)
  })
});
