import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(StudentDetails: any, term: any): any {
    // return null;
    //check if search term is undefined
    if(term === undefined) return StudentDetails;
    return StudentDetails.filter(function(student){
        return student.name.toLowerCase().includes(term.toLowerCase());

    })
  }

}
