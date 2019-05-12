import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  path = "http://localhost:3000/categories"
  constructor( private httpClientService: HttpClient) { }
//Observable ile aslında yazdığımız serviste  get işlemini yaptık
// ve subscribe kısmını yine componentin içinde yapmış olacağız.
  getCategories():Observable<Category[]>{
    return this.httpClientService.get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage="";
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu' + err.error.message
    } else {
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }

}
