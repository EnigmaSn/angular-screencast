import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  public count = 1;
  public myClass = '';
  public user = {
    name: 'John'
  };
  public myColor: string | number = 'red';

  constructor() {
    setTimeout( () => {
      this.myClass = 'green'

      setTimeout( () => {
        this.myClass = 'red'
      }, 2000); // отработает вторым

    }, 2000); // отработает первым
    
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
