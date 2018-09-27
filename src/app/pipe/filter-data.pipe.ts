import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any,filteredString:string, propName:string) {


    console.log(filteredString)
    console.log(propName)
    const resultArray = [];

    if(value.length ==0 || filteredString ==="" || filteredString==undefined){
      return value;
    }

    for(let x of value){
      if(x[propName] === filteredString){
        resultArray.push(x);
      }
    }

    return resultArray;
  }

}
