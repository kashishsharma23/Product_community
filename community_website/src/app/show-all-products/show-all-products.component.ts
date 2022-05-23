import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {

  product!:Products[];
  
  code!:string;
  
  constructor(private productService:ProductsService,private reviewService:ReviewsService,private route:Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.product=data;
      for(let i=0;i<(this.product.length);i++)
      {
      this.code=this.product[i].code;
      this.reviewService.getAverageRating(this.code).subscribe((data:any)=>{
        data=data.toFixed(1);
        this.product[i].averagerating=data;
      })}
    });
   
  }
  askReviews(code:string)
  {
    this.route.navigate(["askReviews",code]);
  }
  postReviews(code:string)
  {
    this.route.navigate(["postReviews",code])
  }

  search(){
    this.route.navigate(['searchProductForm']);
  }
}
