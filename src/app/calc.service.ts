import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  sum: number = 0

  constructor() { }

  addToSum(addedNumber: number) {
    this.sum += addedNumber
  }

  getSum() {
    return this.sum
  }

  clearSum() {
    this.sum = 0
    return this.sum
  }
}
