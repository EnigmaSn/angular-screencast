import { AfterViewChecked, ApplicationRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
// import { MatDrawer } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewChecked, OnInit {
  title = 'myapp';
  user: string = '';

  @ViewChild( NavbarComponent, { static: true })
  navbarComponent!: NavbarComponent;

  constructor(private applicationRef: ApplicationRef) {}

  onMenuToggle() {
    this.navbarComponent.drawer.toggle();
  }

  onInput(element: Event) {
    this.user = (element.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    setInterval( () => {
      this.applicationRef.tick(); // запускает обнаружение изменений
    }, 500 );
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }

}
