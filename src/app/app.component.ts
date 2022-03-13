import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myapp';
  user: string = '';

  onInput(element: HTMLInputElement) {
    this.user = element.value;
  }

  onExit(str: string) {
    this.user = str;
  }
}
