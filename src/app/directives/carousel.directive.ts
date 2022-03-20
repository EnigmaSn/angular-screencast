import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map, Subject, takeUntil, withLatestFrom } from 'rxjs';

interface ICarouselContext<T> {
  $implicit: T,
  index: number,
}

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective<T> implements OnInit, OnDestroy {
  @Input() set appCarouselOf(items: T[] | undefined) {
    if (!items?.length) {
      this.viewContainerRef.clear(); // очистка viewContainer

      return;
    }

    this.items$.next(items); // обновление items
    this.currentIndex$.next(0);
  };

  private items$ = new BehaviorSubject<T[] | null>(null);
  private currentIndex$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<ICarouselContext<T>>,
    private viewContainerRef: ViewContainerRef,
  ) { }
  
  ngOnInit() {
    this.listenIndexChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // отписались от всех потоков, в которых через takeUntil прокидывали subject
    this.destroy$.complete();
  }

  private listenIndexChange() {
    this.currentIndex$
      .pipe(
        withLatestFrom(this.items$.pipe(filter(Boolean))),
        map( ([index, items]) => this.getCurrentContext(index, items) ),
        takeUntil(this.destroy$), // чтобы отписаться от потока
      )
      .subscribe( context => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef, context);
      } )
  }

  private getCurrentContext(index: number, items: T[]): ICarouselContext<T> {
    return {
      index,
      $implicit: items[index] as T,
    }
  }
}
