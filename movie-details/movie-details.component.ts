import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movieDetails: any;

  constructor() {
    console.log('movieDetails', this.movieDetails);
  }

  get key() {
    return Object.keys(this.movieDetails);
  }
}
