import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2');
  }

}
