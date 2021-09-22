import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubeModule { }
