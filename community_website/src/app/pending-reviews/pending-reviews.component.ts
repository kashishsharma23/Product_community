import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ProductsService } from '../products.service';
import { Reviews } from '../reviews';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-pending-reviews',
  templateUrl: './pending-reviews.component.html',
  styleUrls: ['./pending-reviews.component.css']
})
export class PendingReviewsComponent implements OnInit {

  reviews!:Reviews[];
  details!:Reviews;
  email!:string;
  name!:string
  constructor(private adminService:AdminService,private reviewService:ReviewsService,private route:Router) { }

  ngOnInit(): void {
    this.email=this.adminService.getEmail();
    this.adminService.getAdmin(this.email).subscribe(data=>{
      this.name=data.firstname;
    })
    this.reviewService.getPendingReviews().subscribe(data=>{
      this.reviews=data;
    })
  }
approve(sno:number){
  this.reviewService.getReview(sno).subscribe(data=>{
    this.details=data;
    this.reviewService.updateStatus(this.details.sno,this.details).subscribe(data=>{
      console.log("updated");
      this.ngOnInit();
    })
  })
}

reject(sno:number){
  this.reviewService.deleteReview(sno).subscribe(data=>{
    console.log("Rejected");
    this.ngOnInit();
  })
}

logout()
{
  localStorage.clear();
  this.route.navigate(['base'])
}
}
