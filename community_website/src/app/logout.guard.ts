import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private service:AuthService,private route:Router){}
  canActivate(){
    if(this.service.exist())
    {
      if(confirm("You will be logged out"))
      {
        localStorage.clear();
        this.route.navigate(['base']);
        return false;
      }
      return false;
     
    }
    else{
      return true;
    }
    
  }
  
}
