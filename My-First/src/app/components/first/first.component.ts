import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  emp = { name: 'richard', salary: 100000 };

  textInput: string;
  constructor() { }

  buttonClickEvent1234(num: {}): void {
    alert(num.name + 'Child button is clicked');
  }
}
