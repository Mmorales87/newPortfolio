import { Component } from '@angular/core';
import AOS from 'aos';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number = new Date().getFullYear();



  constructor(){}

  ngOnInit(){
    AOS.init({
      
    });
  }

}
