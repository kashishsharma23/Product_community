import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { Reviews } from '../reviews';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-show-searched-result',
  templateUrl: './show-searched-result.component.html',
  styleUrls: ['./show-searched-result.component.css']
})
export class ShowSearchedResultComponent implements OnInit {

  product!:Products[];
  
  code!:string;
  askedReviews!:Reviews[];
  constructor(private productService:ProductsService,private reviewService:ReviewsService,private route:Router) { }

  ngOnInit(): void {
    this.product=this.productService.getSearchedResult();
    if(this.product.length==0)
    {
      alert("No product available")
      this.route.navigate(['searchProductForm'])
    }
    else{
    for(let i=0;i<(this.product.length);i++)
    {
    this.code=this.product[i].code;
    this.reviewService.getAverageRating(this.code).subscribe((data:any)=>{
      this.product[i].averagerating=data;
    })
  }  
  } 
  }

  askReviews(code:string)
  {
    this.reviewService.askReview(code).subscribe(data=>{
      this.askedReviews=data;
      if(this.askedReviews.length==0)
      {
        alert("No reviews available");
        this.route.navigate(["showSearchedResult"]);
      }
    else
    this.route.navigate(["askReviews",code]);
    })
  }
  postReviews(code:string)
  {
    this.route.navigate(["postReviews",code])
  }
}

