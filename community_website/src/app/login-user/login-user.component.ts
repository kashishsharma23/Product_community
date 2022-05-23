import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

loginDetails:User=new User();

  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.loginUser(this.loginDetails).subscribe(data=>{
      if(data==true)
      {
      console.log("logged in successfully");
      this.route.navigate(['loggedin']);
      localStorage.setItem('user',this.loginDetails.email);
      this.service.setEmail(this.loginDetails.email);
      }
      else
      {
        alert("Invalid Credentials");
      }
    })
  }
}
