import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

email=this.service.getEmail();
name!:string;
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
    this.service.getUser(this.email).subscribe(data=>{
      this.name=data.firstName;
  })
}
logout()
{
  localStorage.clear();
  this.route.navigate(['base']);

}
}



