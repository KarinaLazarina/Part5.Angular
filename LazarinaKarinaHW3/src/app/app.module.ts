import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllCommentsOfPostComponent } from './components/all-comments-of-post/all-comments-of-post.component';

const routs = [
  {path: 'posts', component: AllPostsComponent},
  {path: 'comments', component: AllCommentsComponent},
  {path: 'posts/:id', component: AllCommentsOfPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AllPostsComponent,
    CommentComponent,
    AllCommentsComponent,
    AllCommentsOfPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
