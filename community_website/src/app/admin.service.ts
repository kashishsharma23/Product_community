import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  email!:string;
  constructor(private httpClient:HttpClient) { }

  loginAdmin(details:Admin):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8082/loginadmin',details);
  }

  setEmail(email:string)
  {
    this.email=email;
  }
  getEmail()
  {
    return this.email;
  }

  getAdmin(email:string):Observable<Admin>{
    return this.httpClient.get<Admin>('http://localhost:8082/admin/'+email)
  }

}
