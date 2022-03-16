import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myapp';
  user: string = '';
  matDrawer!: MatDrawer;

  onInput(element: Event) {
    this.user = (element.target as HTMLInputElement).value;
  }

  onDrawerSet(matDrawer: MatDrawer) {
    this.matDrawer = matDrawer;
  }
}
