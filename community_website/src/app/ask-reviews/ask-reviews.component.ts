import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { Reviews } from '../reviews';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-ask-reviews',
  templateUrl: './ask-reviews.component.html',
  styleUrls: ['./ask-reviews.component.css']
})
export class AskReviewsComponent implements OnInit {

  code!:string;
askedReviews!:Reviews[];
product!:Products;
  constructor(private activatedRoute:ActivatedRoute,private reviewService:ReviewsService,
    private productService:ProductsService,private route:Router) { }

  ngOnInit(): void {
    this.code=this.activatedRoute.snapshot.params['code'];
    this.reviewService.askReview(this.code).subscribe(data=>{
      this.askedReviews=data;
      if(this.askedReviews.length==0)
      {
        alert("No reviews available");
        this.route.navigate(["showAllProducts"]);
      }
    })
    this.productService.getProduct(this.code).subscribe(data=>{
      this.product=data;
    })
  }

}
