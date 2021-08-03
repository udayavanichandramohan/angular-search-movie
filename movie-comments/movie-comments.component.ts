import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app-movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.css']
})
export class MovieCommentsComponent {
  comments = [];

  submitForm(form) {
    const comment = { comment: form.value.comment, name: form.value.name };
    this.comments.push(comment);
    form.resetForm();
  }
}
