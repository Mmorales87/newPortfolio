import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component'; 
import { MainPageComponent } from './main-page/main-page.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Marc Morales Garcia | Backend developer';
}
