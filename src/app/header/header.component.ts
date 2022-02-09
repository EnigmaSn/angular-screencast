import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  public count = 1;
  public myClass = 'green';
  public user = {
    name: 'John'
  };
  public myColor: string | number = 'red';

  constructor() {
  }

  changeColor(color: string | number) {
    this.myColor = color;
  }

  random() {
    return Math.random();
  }

  ngOnInit(): void {
  }


}
