import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJSON'
})
export class MyJSONPipe implements PipeTransform {

  transform(value: Object): string {
    return JSON.stringify(value);
  }

}
