import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {
  private counter: number = 0;
  @HostBinding('style.color') 
  myColor: string;

  @HostListener('click', ['$event']) changeColor(){
    this.counter++;
    console.log(this.counter);
    this.myColor = '#' + Math.floor(Math.random() * 123456798).toString(16);
  };

  constructor() {
    this.myColor = 'red';

    setTimeout( () => {
      this.myColor = 'green';
    }, 2000);
   }

}
