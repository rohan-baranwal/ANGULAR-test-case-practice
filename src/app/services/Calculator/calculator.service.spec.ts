// import { TestBed } from '@angular/core/testing';

import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let logger = new LoggerService;
    const calculator = new CalculatorService(logger);
    let result = calculator.add(1, 1);
    expect(result).toEqual(2);
  });

  it('should subtract two numbers', () => {
    let logger = new LoggerService;
    const calculator = new CalculatorService(logger);
    let result = calculator.subtract(4, 1);
    expect(result).toEqual(3);
  });
});
