import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from './reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient:HttpClient) { }

  getAllReviews():Observable<Reviews[]>{
    return this.httpClient.get<Reviews[]>('http://localhost:8082/reviews');
  }

  getAverageRating(code:string):Observable<any>{
    return this.httpClient.get<any>('http://localhost:8082/averagerating/'+code);
  }

  postReview(review:Reviews):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8082/reviews',review)
  }

  askReview(code:string):Observable<Reviews[]>{
    return this.httpClient.get<Reviews[]>('http://localhost:8082/reviews/'+code);
  }

  getPendingReviews():Observable<Reviews[]>{
    return this.httpClient.get<Reviews[]>('http://localhost:8082/pendingReviews')
  }

  getReview(sno:number):Observable<Reviews>{
    return this.httpClient.get<Reviews>('http://localhost:8082/review/'+sno);
  }

  updateStatus(sno:number,review:Reviews):Observable<any>{
    return this.httpClient.put<any>('http://localhost:8082/reviews/'+sno,review);
  }

  deleteReview(sno:number):Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8082/reviews/'+sno);
  }
}
