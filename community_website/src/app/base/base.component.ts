import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ReviewsService } from '../reviews.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  numberOfUsers!: number;
  numberOfProducts!: number;
  numberOfReviews!: number;
  constructor(private route: Router,private userService:UserService,
    private productService:ProductsService,private reviewService:ReviewsService) { }

  ngOnInit(): void {
    localStorage.clear();
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
}
