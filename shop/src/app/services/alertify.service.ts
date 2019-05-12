import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable(
  //{
  //providedIn ile bu servisin global olduğunu belirtiyoruz. Bunu buradan silip app.module.ts e 
  //providers içine ekleyince de çalışır aynı şekilde
  //providedIn: 'root'
//}
)
export class AlertifyService {

  constructor() { }

  success(message:string) {

    alertify.success(message)
  }

  error(message:string) {

    alertify.error(message)
  }

  warning(message:string) {

    alertify.warning(message)
  }

}
