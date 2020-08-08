import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filter'
  })
  export class FilterColumn implements PipeTransform{
    transform(rows:any[],colFieldTitle: string) //parameters rows array is the doc details array and colFieldTitle is the search string
    :any[]{
      if(!rows)
        return;
      
      if(!colFieldTitle)
        return rows;
  
      if(colFieldTitle) //return only those rows that have the search string as its sub string in docTitle of particular document
        return rows.filter(row =>!row.DocTitle.toLowerCase().indexOf(colFieldTitle.toLowerCase()));  
    }
  }