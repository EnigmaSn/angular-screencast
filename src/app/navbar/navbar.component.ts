import { Component, OnInit, ViewChild, ViewContainerRef, ContentChild, TemplateRef, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent 
  implements OnInit
{ 
  @Output()
  drawerEmit = new EventEmitter<MatDrawer>(true); // true - значние isAsync, по умолчанию false

  @ViewChild ( 'drawer', { static: true, read: MatDrawer } )
  
  private drawer!: MatDrawer ;

  @ContentChild( 'matListTemplate', { static: true, read: TemplateRef } )
  matListTemplate!: TemplateRef<unknown>;

  showFiller = false;

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.drawer.toggle();
    this.changeDetectionRef.markForCheck();
  }
}
