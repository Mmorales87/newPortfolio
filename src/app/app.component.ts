import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/header/header.component'; 
import { MainPageComponent } from './main-page/main-page.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

@NgModule({
  declarations: [
    HeaderComponent, // Asegúrate de declarar 'HeaderComponent' aquí
    MainPageComponent, // Asegúrate de declarar 'MainPageComponent' aquí
    FooterComponent, // Asegúrate de declarar 'FooterComponent' aquí
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppComponent {
  title = 'Marc Morales Garcia | Backend developer';
}
