import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?:string): Product[] {
    filterText= filterText?filterText.toLocaleLowerCase():null //var ise küçük harfe çevir. Yoksa null
//filterText var ise değeri filtrele Product cinsindeki arraydeki name alanlarını lowecase yapıp içinde filtreye yazılan yazıdan var olanları getir.filterText undefined ise value döndür geriye
    return filterText? value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
