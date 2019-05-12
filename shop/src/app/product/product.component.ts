import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:ProductService) {

  }

  title = "Ürün Listesi"
  filterText = ""
  products: Product[]
  
  ngOnInit() {
    //artık burada data backendden geliyormuş gibi çekiyoruz. gelen datayıda this products a attık.
    //alttaki durumu bir önceki committe bu sayfada http client ı alarak yapmıştık. ama mimari olarak
    //her componentin datası kendi adına oluşturduğumuz serviceten buraya bağlanması daha sağlıklı
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    });
  }
  addToCart(product) {
    this.alertifyService.success("ürün sepete eklendi.")
  }

}
