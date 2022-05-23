import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search-product-form',
  templateUrl: './search-product-form.component.html',
  styleUrls: ['./search-product-form.component.css']
})
export class SearchProductFormComponent implements OnInit {

  product:Products=new Products();
  searchedProducts!:Products[];
  constructor(private productService:ProductsService,private route:Router) { }

  ngOnInit(): void {
  }
onSubmit()
{
  if(this.product.code==undefined&&this.product.name==undefined&&this.product.brand==undefined)
  alert("Enter at least one field");
  else
  {
    this.productService.search(this.product).subscribe(data=>{
      this.searchedProducts=data;
    this.productService.setSearchedResult(this.searchedProducts);
    this.route.navigate(["showSearchedResult"]);
  })
}
}
}
