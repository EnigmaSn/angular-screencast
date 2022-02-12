import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Output() userSelected: EventEmitter<any> = new EventEmitter;

  public isVisible: boolean = true;

  constructor() {
    console.log(`Constructor: ${this.user}`); // undefited
  }

  selectUser() {
    this.userSelected.emit(this.user);
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${JSON.stringify(this.user)}`); // object 
  }

}
