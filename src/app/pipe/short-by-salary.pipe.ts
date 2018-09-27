import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortBySalary'
})
export class ShortBySalaryPipe implements PipeTransform {

  transform(value: number) {
    return null;
  }

}
