import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.scss'],
})
export class PeopleCounterComponent implements OnInit {
  @Input('numberOfPeople')
  public numberOfPeople = '1';

  @Output('numberOfPeopleChange')
  public numberOfPeopleChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  increasePeople() {
    const numberOfPeople = Number(this.numberOfPeople);

    if (numberOfPeople < 99) {
      this.numberOfPeopleChange.emit(numberOfPeople + 1);
    }
  }

  decreasePeople() {
    const numberOfPeople = Number(this.numberOfPeople);

    if (numberOfPeople > 1) {
      this.numberOfPeopleChange.emit(numberOfPeople - 1);
    }
  }
}
