import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AboutComponent,
    AchievementsComponent,
    ContactComponent,
    FeedbackComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
