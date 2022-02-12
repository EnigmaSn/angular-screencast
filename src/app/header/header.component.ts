import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  public count = 1;
  public myClass = 'green';
  public selectedUser: any; 
  public user = {
    name: 'John'
  };
  public users = [
    {name: 'Albus'},
    {name: 'Severus'},
    {name: 'Potter'},
  ]
 
  constructor() {
  }


  random() {
    return Math.random();
  }

  ngOnInit(): void {
  }


}
