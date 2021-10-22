import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CalcService } from '../calc.service'

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  sum = this.calcService.getSum()

  calcForm = this.formBuilder.group({
    addedNumber: 0
  })

  constructor(
    private calcService: CalcService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sum = this.calcService.clearSum()
    this.calcService.addToSum(this.calcForm.value.addedNumber)
    this.sum = this.calcService.getSum()
  }

  onReset(): void {
    this.sum = this.calcService.clearSum()
    this.calcForm.setValue({ addedNumber: 0 })
  }
}
