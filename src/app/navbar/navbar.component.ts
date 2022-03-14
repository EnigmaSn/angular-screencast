import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent 
  implements OnInit
{ 
  @ViewChild( 'matListViewPort', { static: true, read: ViewContainerRef } )
  matListViewPort!: ViewContainerRef;

  @ContentChild( 'matListTemplate', { static: true, read: TemplateRef } )
  matListTemplate!: TemplateRef<unknown>;

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
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
