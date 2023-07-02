import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { first } from "rxjs";
import { Post } from "src/app/models/post";
import { PostCardComponent } from "./post-card.component";


/* 
why use Angular TestBed (ATB)?
    when you want an angular specific way of testing your application 
    when you want to test both the html template and ts component at a time
*/

describe('post card component',()=>{
    describe('delete post',()=>{
      let fixture: ComponentFixture<PostCardComponent>;
      let component: PostCardComponent;
      let templateDebug: DebugElement;
      let templateElement: HTMLElement;
      let post: Post;
      beforeEach(() => {
        fixture = TestBed.createComponent(PostCardComponent);
        component = fixture.componentInstance;
        post = { id: 1, body: 'body 1', title: 'title 1' };

        //creating the template
        templateDebug = fixture.debugElement;
        templateElement = templateDebug.nativeElement;
      });

     /* 
       why use native element?
            when running an appliation 
            if your application only uses the browser as the platform to run 
            then go ahead ancd use nativ element
     */

      it('should create the h2 heading with post list using nativeElement', () => {
        let postsHeading = templateElement.querySelector('h2');
        expect(postsHeading?.textContent).toContain('posts list');
      });

      /*
        why use debug element?
            when running an appliation 
            if your application uses any  platform is not only browser specific like using server sometimes
            then go ahead use debug element which is highly genneric that can handle any platform depenedent application testing 
      */
      it('should create the h2 heading with post list using debug element', () => {
        let postsHeading: HTMLElement = templateDebug.query(
          By.css('h2')
        ).nativeElement;

        expect(postsHeading.textContent).toContain('posts list');
      });

      /* 
      testing the delete method used by child component event emitter
      when the delete button is pressed
      then the child component should trigger the event that calls the delete method
      in the delete method in the parent component 
      */
      it('delete method should emit the post when clicked', () => {
        //arrange
        component.post = post;

        //act
        component.onDeletePost(new MouseEvent('click'));

        //assert
        component.delete.pipe(first()).subscribe((post) => {
          expect(post).toEqual(post);
        });
      });
    })
})





