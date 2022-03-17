import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  @Output()
  clickMenu = new EventEmitter<void>();

  user$!: Observable<any>;

  // user = {
  //   name: 'Misha',
  //   role: 'guest',
  //   sum: 10000,
  //   format: 'RUB'
  // }
 
  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  private getUser$(): Observable<any> {
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
