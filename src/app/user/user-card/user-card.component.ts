import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;

  public isVisible: boolean = true;
  public friends = [
    {name: 'Albus'},
    {name: 'Severus'},
    {name: 'Potter'},
  ];

  constructor() {
    console.log(`Constructor: ${this.user}`); // undefited
  }

  changeVisability() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${JSON.stringify(this.user)}`); // object 
  }

}
