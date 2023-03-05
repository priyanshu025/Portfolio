import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EducationComponent } from './education/education.component';

// const appRoute:Routes=[
//   // {path:'',redirectTo:'Home',pathMatch:'full'},
  
// ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // NavbarComponent,
    ContainerComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    SkillsComponent,
    HomeComponent,
    PageNotFoundComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
