import { Component } from '@angular/core';
import { getMovies } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
  moviesList = [];
  searchText: string;
  showMoreDetails: any = {};
  constructor() {
    this.moviesList = getMovies();
  }

  movieClick(movie: any) {
    this.showMoreDetails = movie;
    console.log('bbbbbbbb', movie);
  }
  get key(){
    return Object.keys(this.showMoreDetails);
  }

  modelChanged(movie){
    console.log('EVENT', movie.length)
    if(!movie.length){
      this.showMoreDetails = {};
    }

  }
}
