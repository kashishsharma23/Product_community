import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){
  }
  canActivate()
  {
    if(this.auth.isUserLogin()||this.auth.isAdminLogin())
    return true;
    else
    {
    alert("Not logged in");
    this.route.navigate(['/base']);
    return false;
    }
  }

}
