import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  API_KEY = '';

  constructor(private httpClient: HttpClient) {}

  getReviews(): any {
    return this.httpClient.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${this.API_KEY}`);
  }
}
