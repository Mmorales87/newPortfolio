import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    items: 3
  };

  constructor() { }

  ngOnInit() {

    AOS.init({
    
    });
  }

}
