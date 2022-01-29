import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {
  msg = '';
  constructor() { }

  ngOnInit(): void {
  }

  ButtonClickEvent(): void {
    this.msg = 'button clicked';
  }
}
