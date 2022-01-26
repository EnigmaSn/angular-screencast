import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public count = 1;
  public myClass = 'red';
  public user = {
    name: 'John'
  };
  
  constructor() {
    setTimeout( () => {
      this.myClass = 'green'
    }, 2000);
  }

  random() {
    return Math.random();
  }

  ngOnInit(): void {
  }


}
