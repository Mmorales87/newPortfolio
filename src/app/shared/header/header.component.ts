import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarToggle') navbarToggle!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    // Burger Menu
    const burgerMenu = () => {
      this.navbarToggle.nativeElement.addEventListener('click', (event: Event) => {
        event.preventDefault();
        this.dropdownMenu.nativeElement.classList.toggle('show');
      });
    }

    burgerMenu();
  }
}
