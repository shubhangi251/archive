import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';

import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { TitleCasePipe } from './title-case.pipe';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Archive1Component } from './archive1/archive1.component';
import { Archive2Component } from './archive2/archive2.component';
import { Archive3Component } from './archive3/archive3.component';
import { NavbararchiveComponent } from './navbararchive/navbararchive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    TitleCasePipe,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    Archive1Component,
    Archive2Component,
    Archive3Component,
    NavbararchiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
        { path: 'archive/:year/:date', component: Archive1Component },
      { path: 'archive2/2017/2', component: Archive2Component },
    
      { path: 'archive3/2017/3', component: Archive3Component},
        { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
