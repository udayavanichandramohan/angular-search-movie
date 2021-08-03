import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieCommentsComponent } from '../movie-comments/movie-comments.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule ],
  declarations: [ AppComponent, MovieDetailsComponent, MovieCommentsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
