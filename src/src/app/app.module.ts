import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
{
  path: 'home', component: HomeComponent,

},

{
  path: 'about', component: AboutComponent
},
{
  path: 'contact', component: ContactComponent
},
{
  path: 'education', component: EducationComponent
},
{
  path: 'services', component: ServicesComponent
},
{
  path: 'skills', component: SkillsComponent
},
{
  path: 'socialmedia', component: SocialmediaComponent
},
{
  path: 'home/home1', component: Home1Component
},
{
  path: 'home/home2', component: Home2Component
},
{
  path: "**", component: NotfoundComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    NotfoundComponent,
    HomeComponent,
    ServicesComponent,
    SocialmediaComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
