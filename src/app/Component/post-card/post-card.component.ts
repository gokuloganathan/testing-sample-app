import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {

  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>()

  onDeletePost(event:Event){
    event.preventDefault()
    this.delete.emit(this.post)
  }
}
