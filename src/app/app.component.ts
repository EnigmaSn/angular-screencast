import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myapp';
  user: string = '';

  onInput(element: Event) {
    this.user = (element.target as HTMLInputElement).value;
  }
}
