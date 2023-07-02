import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}

  add(n1: number, n2: number) {
    this.loggerService.log(`add() for ${n1} , ${n2} is called`);
    //debugger
    return n1 + n2;
  }

  subtract(n1: number, n2: number) {
    this.loggerService.log(`subtract() for ${n1} , ${n2} is called`);
    //debugger
    return Math.abs(n1 - n2);
  }
}
