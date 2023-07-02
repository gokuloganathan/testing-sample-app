import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public URL: string =
    'https://my-json-server.typicode.com/gokuloganathan/mock-server';
  constructor(public http: HttpClient) {}

  getPost() {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }

  deletePost(post: Post) {
    return this.http.delete(`${this.URL}/posts/${post.id}`);
  }
}
