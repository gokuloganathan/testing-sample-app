import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/Post/post.service';
import { PostComponent } from './post.component';

describe('post component', () => {
  let posts: Post[];
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent
  let fakePostService: any;
  let postService: any;

  beforeEach(async () => {
    fakePostService = jasmine.createSpyObj(['getPost', 'deletePost']);
    await TestBed.configureTestingModule({
      declarations:[
        PostComponent
      ],
      imports: [HttpClientModule],
      providers: [
        {
          provide: PostService,
          useValue: fakePostService,
        },
      ],
    });

    //injecting the component via providers like a service
    //component = TestBed.inject(PostComponent);

    //instead creating the component instance iuing the testbed
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance

    //injecting the service
    postService = TestBed.inject(PostService);

    posts = [
      {
        id: 1,
        body: 'body1',
        title: 'title1',
      },
      {
        id: 2,
        body: 'body2',
        title: 'title2',
      },
      {
        id: 3,
        body: 'body3',
        title: 'title3',
      },
    ];

    //fakePostService = jasmine.createSpyObj(['getPost', 'deletePost']);
    //component = new PostComponent(fakePostService);
  });

  describe('delete', () => {
    it('delete post when deletePost() is called', () => {
      //arrange
      //fakePostService.deletePost.and.returnValue(of(true));  not req if you use testbed
      postService.deletePost.and.returnValue(of(true));
      component.posts = posts;

      //act
      component.deletePost(posts[1]);

      //assert
      expect(component.posts.length).toBe(2);
    });

    it('should delete actual post when delete method is called', () => {
      //arrange
      postService.deletePost.and.returnValue(of(true));
      component.posts = posts;

      //act
      component.deletePost(posts[1]);

      //assert
      for (let post of component.posts) {
        expect(post).not.toEqual(posts[1]);
      }
    });

    it('call delete in post service only once', () => {
      //arrange
      postService.deletePost.and.returnValue(of(true));
      component.posts = posts;

      //act
      component.deletePost(posts[1]);

      //assert
      expect(postService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
