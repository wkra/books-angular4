import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
      if (!items || !filter) {
          return items;
      }
      return items.filter(item =>{
        if (item.id.indexOf(filter) !== -1 ||
            item.first_name.indexOf(filter) !== -1 ||
            item.last_name.indexOf(filter) !== -1 ||
            item.title.indexOf(filter) !== -1 ||
            item.publisher.indexOf(filter) !== -1 ||
            item.edition.indexOf(filter) !== -1 ||
            item.year.indexOf(filter) !== -1){
              return true;
            }
        ;}
      );
  }

}
