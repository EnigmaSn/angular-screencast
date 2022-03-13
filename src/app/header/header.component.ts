import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  @Input() 
  user: string = '';

  @Output()
  userChange: EventEmitter<string> = new EventEmitter<string>();
 
  constructor() {
  }

  ngOnInit(): void {
  }

  onExit() {
    this.userChange.emit('');
  }

}
