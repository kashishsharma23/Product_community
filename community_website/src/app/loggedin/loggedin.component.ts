import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ReviewsService } from '../reviews.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {

  numberOfUsers!: number;
  numberOfProducts!: number;
  numberOfReviews!: number;
  constructor(private userService:UserService,private route:Router,
    private productService:ProductsService,private reviewService:ReviewsService) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{
      this.numberOfUsers=data.length;
    });
    this.productService.getAllProducts().subscribe(data=>{
      this.numberOfProducts=data.length;
    });
    this.reviewService.getAllReviews().subscribe(data=>{
      this.numberOfReviews=data.length;
    })
     
  }

  view()
  {
    this.route.navigate(['showAllProducts']);
  }


}
