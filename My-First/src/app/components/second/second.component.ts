import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Input() fromFirst: string;
  @Output() informParent: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }
  btnClicked(num: number): void {
    this.informParent.emit({ name: 'richard' });
  }
}
