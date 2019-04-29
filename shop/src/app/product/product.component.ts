import { Component, OnInit } from '@angular/core';
import { Product } from './product';

declare let alertify : any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  title="Ürün Listesi"
  filterText=""
  products : Product[] =[
  {id:1,name: "Laptop",price:2500,categoryId:1,description:"Asus Zenbook", imageUrl:"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"},
   {id:2,name: "Mouse",price:250,categoryId:2,description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"},
   {id:3,name: "Earphone",price:150,categoryId:2,description:"sinbo",imageUrl:"https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1077&q=80"}
  ]
  ngOnInit() {
  }
  addToCart (product) {
    alertify.success("ürün sepete eklendi.")
  }

}
