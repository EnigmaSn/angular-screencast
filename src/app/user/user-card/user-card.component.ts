import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;

  constructor() {
    console.log(`Constructor: ${this.user}`); // undefited
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${JSON.stringify(this.user)}`); // object 
  }

}
