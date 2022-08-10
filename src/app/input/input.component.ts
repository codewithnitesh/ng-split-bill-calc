import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input('label')
  public label = '';

  @Input('type')
  public type = '';

  @Input('id')
  public id = '';

  @Input('placeholder')
  public placeholder = '';

  @Input('disabled')
  public disabled = false;

  @Input('value')
  public value = '';

  @Output('valueChange')
  public valueChange = new EventEmitter();

  @Output('blur')
  public blur = new EventEmitter();

  public readonly errorMessage = 'Invalid Input Value!';

  constructor() {}

  ngOnInit(): void {}

  valueChanged(value: string) {
    if (Number(value) > 10000000) {
      this.value = '';
      return;
    }

    const pattern = /^\d+(\.\d{1,2})?$/;

    if (pattern.test(value)) {
      this.valueChange.emit(value);
    }
  }

  onBlur($event: any) {
    const { value } = $event.target;
    const numValue = Number(value).toFixed(2);

    this.blur.emit(numValue);
    this.valueChange.emit(numValue);
  }
}
