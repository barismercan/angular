import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable,throwError } from 'rxjs'; 
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path = "http://localhost:3000/products"
  constructor( private httpClientService: HttpClient) { }
//Observable ile aslında yazdığımız serviste  get işlemini yaptık
// ve subscribe kısmını yine componentin içinde yapmış olacağız.
  getProducts():Observable<Product[]>{
    return this.httpClientService.get<Product[]>(this.path).pipe(
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
