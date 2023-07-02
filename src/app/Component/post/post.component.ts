import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private postService:PostService){}
  //post$ = this.postService.getPost()

  posts!:Post[]

  ngOnInit() {
    this.getPost()
  }

  getPost(){
    this.postService.getPost().subscribe(posts => {
      this.posts = posts
    })
  }

  deletePost(post:Post){
    this.posts = this.posts.filter(p => p.id != post.id)
    this.postService.deletePost(post).subscribe();
  }
  
}
