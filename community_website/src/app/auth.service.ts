import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLogin()
  {
    return !!localStorage.getItem("user");
  }
  isAdminLogin()
  {
    return !!localStorage.getItem("admin");
  }

  exist()
  {
    if(localStorage.getItem("user")||localStorage.getItem("admin"))
    return true;
    else
    return false;
  }
}
