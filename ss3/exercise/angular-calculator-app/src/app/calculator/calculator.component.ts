import {Component, OnInit} from '@angular/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = '';

  number2 = '';

  result = 0;
  error: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  change(s: string) {
    switch (s) {
      case 'Addition':
        this.result = parseFloat(this.number1) + parseFloat(this.number2);
        break;
      case 'Subtraction':
        this.result = parseFloat(this.number1) - parseFloat(this.number2);
        break;
      case 'Multiplication':
        this.result = parseFloat(this.number1) * parseFloat(this.number2);
        break;
      case 'Division':
        if (this.result === 0) {
          return this.error = 'can not Division ';
        } else {
          this.result = parseFloat(this.number1) / parseFloat(this.number2);
          break;
        }
    }
  }
}
