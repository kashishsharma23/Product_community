import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginDetails:Admin=new Admin();
  constructor(private service:AdminService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.service.loginAdmin(this.loginDetails).subscribe(data=>{
      if(data==true)
      {
      console.log("logged in successfully");
      this.route.navigate(['pendingReviews']);
      localStorage.setItem('admin',this.loginDetails.email);
      this.service.setEmail(this.loginDetails.email);
      }
      else
      {
        alert("Invalid Credentials");
      }
    })
  }

}
