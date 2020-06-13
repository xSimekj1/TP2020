import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/navigation/topmenu/topmenu.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { IntroComponent } from './components/landingpage/intro/intro.component';
import { TeamComponent } from './components/landingpage/team/team.component';
import { AboutComponent } from './components/landingpage/about/about.component';
import { TechnologiesComponent } from './components/landingpage/technologies/technologies.component';
import { ManagementComponent } from './components/landingpage/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    LandingpageComponent,
    IntroComponent,
    TeamComponent,
    AboutComponent,
    TechnologiesComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
