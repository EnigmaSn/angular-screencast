import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInsert]'
})
export class InsertDirective {
  @Input() appInsertFirst!: TemplateRef<unknown>;
  @Input() appInsertLast!: TemplateRef<unknown>;
  @Input() set appInsert(flag: any) {
    setTimeout( () => {
      if (flag && this.appInsertFirst) {
        this.viewContainerRef.createEmbeddedView(this.appInsertFirst)
  
        return;
      }
  
      if (!flag && this.appInsertLast) {
        this.viewContainerRef.createEmbeddedView(this.appInsertLast)
  
        return;
      }
    }, 0)
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }
}
