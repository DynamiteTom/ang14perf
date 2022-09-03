import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  standalone: true,
  pure: true
})
export class MyUpperCasePipe implements PipeTransform {
/*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
*/
   transform(value: string){
        return value.toUpperCase();
   }
}
