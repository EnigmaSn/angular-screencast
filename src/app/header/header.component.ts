import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { MatDrawer } from '@angular/material/sidenav';
import { mapTo, Observable, timer } from 'rxjs';

interface IUser {
  name: string;
  role: string;
  shopSum: Array<{
    value: number,
    format: string
  }>
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

  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  private getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      mapTo({
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
      )
    );
  }

}
