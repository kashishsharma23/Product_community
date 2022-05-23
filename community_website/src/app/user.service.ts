import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email!:string;
  constructor(private httpClient:HttpClient ) { }

  registerUser(details:User):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8082/registeruser',details);
  }

  loginUser(loginDetails:User):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8082/loginuser',loginDetails);
  }

  getUser(email:string):Observable<User>{
    return this.httpClient.get<User>('http://localhost:8082/users/'+email);
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8082/users');
  }

  setEmail(email:string)
  {
    this.email=email;
  }
  getEmail()
  {
    return this.email;
  }
}
