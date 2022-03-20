import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, timer } from 'rxjs';

interface IUser {
  name: string;
  role: string;
  sum: number;
  format: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  @Output()
  clickMenu = new EventEmitter<void>();

  user$!: Observable<IUser>;

  // user = {
  //   name: 'Misha',
  //   role: 'guest',
  //   sum: 10000,
  //   format: 'RUB'
  // }

  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  user = {
    name: 'Misha',
    role: 'Guest',
    shopSum: [
      {
        value: 1000,
        format: 'RUB'
      },
      {
        value: 10,
        format: 'USD'
      },
      {
        value: 9,
        format: 'EUR'
      }
    ]
  }

  private getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      map( () => ({
        name: 'Misha',
        role: 'guest',
        sum: 10000,
        format: 'RUB'
      })),
    );
  }

}
