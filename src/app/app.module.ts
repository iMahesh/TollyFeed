import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CastFeedComponent } from './cast-feed.component';
import { CrewFeedComponent } from './crew-feed.component';
import { DirectorFeedComponent } from './director-feed.component';
import { FeedComponent } from './feed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CastFeedComponent,
    CrewFeedComponent,
    DirectorFeedComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent
      },
     {
        path:'cast_feed',
        component:CastFeedComponent
      },
      {
        path:'crew_feed',
        component:CrewFeedComponent
      },
      {
        path:'director_feed',
        component:DirectorFeedComponent
      },
      {
        path:'feed',
        component:FeedComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
