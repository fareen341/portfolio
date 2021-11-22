import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './portfolio/about/about.component';
import { AchievementsComponent } from './portfolio/achievements/achievements.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { FeedbackComponent } from './portfolio/feedback/feedback.component';
import { HomeComponent } from './portfolio/home/home.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProjectsComponent } from './portfolio/projects/projects.component';

const routes: Routes =[
  {path:'', component:HomeComponent},
  //{path:'index', component:HomeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'achievements', component:AchievementsComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'feedback',component:FeedbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
