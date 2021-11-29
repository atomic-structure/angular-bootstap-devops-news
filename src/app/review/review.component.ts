import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../nytimes.movie.review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  data: any[];

  constructor(public reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(data => {
      console.log(data);
      this.data = data['results'];
    });
  }
}
