import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { InfoAboutUserComponent } from './components/info-about-user/info-about-user.component';

const routs = [
  {path: '', component: AppComponent},
  {path: 'user/:id', component: InfoAboutUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    InfoAboutUserComponent
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
