import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationDetails:User=new User();


  constructor(private route:Router,private userService:UserService) { }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    if(this.registrationDetails.password!=this.registrationDetails.confirmPassword)
    {
      alert("Incorrect Password");
    }
    else{
      this.userService.registerUser(this.registrationDetails).subscribe(data=>{
        console.warn(data)
        if(data==true)
        {
        console.log("Saved Successfuly");
        this.route.navigate(['loginForm']);
        }
        else{
          alert("User already exists");
        }
      })
    }
  }
  logout()
  {
    localStorage.clear();
    this.route.navigate(['base']);

  }
}
