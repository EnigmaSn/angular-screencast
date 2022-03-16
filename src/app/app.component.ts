import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myapp';
  user: string = '';

  @ViewChild( NavbarComponent, { static: true })
  navbarComponent!: NavbarComponent;

  onMenuToggle() {
    this.navbarComponent.drawer.toggle();
  }

  onInput(element: Event) {
    this.user = (element.target as HTMLInputElement).value;
  }

}
