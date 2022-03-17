import { Component, OnInit, ViewChild, ViewContainerRef, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent 
  implements OnInit
{ 
  @Output()
  drawerEmit = new EventEmitter<MatDrawer>(true); // true - значние isAsync, по умолчанию false

  @ViewChild( 'matListViewPort', { static: true, read: ViewContainerRef } )
  matListViewPort!: ViewContainerRef;

  @ViewChild ( 'drawer', { static: true, read: MatDrawer } )
  drawer!: MatDrawer ;

  @ContentChild( 'matListTemplate', { static: true, read: TemplateRef } )
  matListTemplate!: TemplateRef<unknown>;

  showFiller = false;

  constructor() { }

  ngOnInit(): void {

    this.drawerEmit.emit(this.drawer);

    this.matListViewPort.createEmbeddedView(
      this.matListTemplate,
      { // context
        $implicit: {
          age: 29
        },
        myName: 'Anna',
        getName: () => { console.log('Тронула меня, тронула!') }
      } 
    );

  }
}
