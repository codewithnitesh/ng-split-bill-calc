import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numberOfPeople = '1';
  billTotalInput = '';
  tipInput = '';
  billTipTotal = '';
  perPersonTotal = '';

  calculateBill() {
    const billTotal = Number(this.billTotalInput);
    const tipInput = Number(this.tipInput);
    const numberOfPeople = Number(this.numberOfPeople);

    if (
      !billTotal ||
      billTotal < 0 ||
      numberOfPeople < 1
    ) {
      return;
    }

    const billTipTotal = Number(billTotal + tipInput)
    this.billTipTotal = billTipTotal.toFixed(2);

    this.perPersonTotal = Number(billTipTotal / numberOfPeople).toFixed(2);
  }

  validateNumber(value: number): boolean {
    return typeof value === 'number' && isFinite(value);
  }
}
