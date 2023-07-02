import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './Pipe/strength.pipe';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './Component/post/post.component';
import { PostCardComponent } from './Component/post-card/post-card.component'

@NgModule({
  declarations: [AppComponent, StrengthPipe, PostComponent, PostCardComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
