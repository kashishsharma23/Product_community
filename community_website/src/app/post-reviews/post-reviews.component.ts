import { Component, OnInit } from '@angular/core';
import { Reviews } from '../reviews';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from '../reviews.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-reviews',
  templateUrl: './post-reviews.component.html',
  styleUrls: ['./post-reviews.component.css']
})
export class PostReviewsComponent implements OnInit {

productReview:Reviews=new Reviews();
code!:string;
numberOfreviews!:Reviews[];
  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private userService:UserService,private reviewService:ReviewsService) { }

  ngOnInit(): void {
    this.code=this.activatedRoute.snapshot.params['code'];
    this.productReview.code=this.code;
    this.reviewService.getAllReviews().subscribe(data=>{
      this.numberOfreviews=data;
      this.productReview.sno=(this.numberOfreviews.length)+1;
    });
    this.productReview.postedby=this.userService.getEmail();
  }

  onSubmit()
  {
    this.productReview.status="R";
    this.reviewService.postReview(this.productReview).subscribe(data=>{
      console.log(data);
      alert("Review sent for approval")
      this.route.navigate(['showAllProducts']);
    })
  }
}
